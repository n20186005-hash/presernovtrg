import { setRequestLocale } from 'next-intl/server';
import PageSections from '@/components/PageSections';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PageSections />;
}
