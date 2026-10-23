# presernovtrg — www → apex 重定向修复说明

## 专题页（topic pages）架构（2026-10 新增）

站点定位为「以普列舍仁广场为中心的卢布尔雅那步行游览指南」，除各语言首页外，
还发布长尾专题页（规划 40 页，分批上线）。

- **内容层**：`src/data/topics.ts`（类型 + 注册表 + `getTopic`/`topicLocales`/
  `topicAlternates`）、`src/data/topics.en.ts`（英文全量）、`src/data/topics.sl.ts`
  （斯洛文尼亚语重点页）。每个 `TopicContent` 含 title/description/h1/intro/
  facts/sections/faq/related/updated；`related` 只链接已存在的语种版本，
  未建页面自动过滤，不会产生死链。
- **路由**：`src/app/[locale]/[topic]/page.tsx`（`generateStaticParams` 只生成
  「该语种有内容」的 locale×slug 组合，`dynamicParams=false`），
  `generateMetadata` 输出自引用 canonical + 仅含已发布语种的 hreflang，
  页面注入 BreadcrumbList + FAQPage + WebPage(about #attraction) JSON-LD。
- **路径名**：`src/i18n/routing.ts` 的 `pathnames` 已注册全部 40 个专题 slug
  （跨语种相同）；斯洛文尼亚语沿用根目录无前缀结构。
- **首页入口**：`src/components/TopicLinks.tsx`（`#guides` 区块，Header 导航
  「Guides/Vodniki」锚点）按当前语种渲染可用专题卡片；`src/app/sitemap.ts`
  收录全部已发布专题 URL（每语种一条 canonical + alternates）。
- **新增一个专题页**：在 `TOPIC_SLUGS` 加 slug → routing pathnames 加同名项 →
  在对应语言文件写 `TopicContent` → 重新构建（sitemap/首页/内链自动生效）。
- **新增一个语种版本**：只在对应 `topics.<lang>.ts` 写该 slug 的内容即可，
  hreflang/sitemap/内链自动纳入该语种。

批次（2026-10）：第一批 14 页（history / preseren-monument / map /
triple-bridge / franciscan-church / station-to-square / airport-to-square /
bus-urbana / parking / accessibility / one-hour-walk / christmas-market /
christmas-lights / where-to-stay），其中斯洛文尼亚语已发布 6 页重点页
（history / preseren-monument / map / station-to-square / christmas-market /
christmas-lights）。

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
