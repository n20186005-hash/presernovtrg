# presernovtrg — www → apex 重定向修复说明

## 现象
访问 `https://www.presernovtrg.com` 时被错误重定向到
`https://presernovtrg.com/:path*`,并渲染 Next.js 的 404 页面
（"This page could not be found."）。

## 根因
这是 **Cloudflare 控制台 Redirect Rule 配置错误，不是应用代码问题**。

重定向目标 URL 里写的是字面量 `:path*`,而 Cloudflare 的路径占位符
语法是 `${1}`(不是 `:path*`)。Cloudflare 把 `:path*` 当普通字符串原样
拼到路径上,于是请求落到并不存在、名为 `:path*` 的页面,返回 404。

应用本身的 `src/middleware.ts` 已经**正确**处理 www → apex 跳转(含路径
保留),见 `getCanonicalRedirectUrl()`:
- 收到 `www.presernovtrg.com` 任意路径 → 返回 308 跳转到
  `https://presernovtrg.com` 并保留原路径。
- 规范域名在 `src/i18n/routing.ts` 的 `BASE_URL = 'https://presernovtrg.com'`
  统一定义,全站 canonical / hreflang / sitemap / JSON-LD 都源自此值。

## 修复方案(二选一)

### 方案 A(推荐):删掉坏的边缘规则,让应用中间件接管
1. Cloudflare 控制台 → `presernovtrg.com` 区域 → **Rules → Redirect Rules**
   (或 Bulk Redirects)。
2. 找到把 `www.presernovtrg.com` 跳到 `https://presernovtrg.com/:path*`
   的那条规则,**删除或暂停**它。
3. 确保 `www.presernovtrg.com` 主机(自定义主机名 / DNS 记录)指向同一个
   Worker(404 是 Next.js 页面,说明它已在指向 Worker)。
4. 生效后访问 `www.presernovtrg.com/sl/...` 会正确跳到
   `https://presernovtrg.com/sl/...`。

### 方案 B:保留边缘规则,但修正占位符
- Single Redirect Rule(动态目标):源 `https://www.presernovtrg.com/(.*)`
  → 目标 `https://presernovtrg.com/${1}`(状态 301/308)。
- 或 Bulk Redirects:源 `www.presernovtrg.com/*`
  → 目标 `https://presernovtrg.com/${1}`。

关键:把 `:path*` 换成 `${1}`。

## 验证
```bash
curl -sI "https://www.presernovtrg.com/sl/" | grep -i location
```
应得到 `location: https://presernovtrg.com/sl/`(而非 `:path*`)。
