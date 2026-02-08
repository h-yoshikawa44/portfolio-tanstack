import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';
import { clientEnv } from '@/config/env';
import appCss from '@/styles.css?url';

const title = "h-yoshikawa44's Portfolio";
const description =
  'Web Developer である h-yoshikawa44 のポートフォリオサイトです。';
const ogpImage = '/ogp.png';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title,
      },
      {
        name: 'description',
        content: description,
      },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogpImage },
      { property: 'og:type', content: 'profile' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogpImage },
      // Google Search Console
      import.meta.env.PROD
        ? {
            name: 'google-site-verification',
            content: clientEnv.VITE_GOOGLE_SITE_VERIFICATION,
          }
        : {},
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: import.meta.env.PROD
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${clientEnv.VITE_GOOGLE_ANALYTICS_ID}`,
            async: true,
          },
          {
            children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${clientEnv.VITE_GOOGLE_ANALYTICS_ID}');
        `,
          },
        ]
      : [],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero mainTitle="Not Found" subTitle="ページが見つかりません" />
      <div className="grow w-full bg-brand-secondary">
        <SectionBase>
          <HeaderText>404ページ</HeaderText>
          <p className="mt-2">お探しのページが見つかりませんでした。</p>
          <p>
            恐れ入りますが、
            <a className="underline underline-offset-2" href="/">
              Home
            </a>
            やヘッダーからアクセスしたいページへどうぞ。
          </p>
        </SectionBase>
      </div>
    </main>
  );
}
