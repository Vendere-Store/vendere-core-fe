import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Include Tailwind CSS CDN link */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
