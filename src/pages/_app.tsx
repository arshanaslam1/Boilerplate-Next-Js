// import '@fontsource/montserrat';

import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import createEmotionCache from '@/utils/createEmotionCache';
import csTheme from '@/utils/muiTheme';

const montserrat = Montserrat({
  style: ['normal'],
  subsets: ['latin'],
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className={montserrat.className}>
        <ThemeProvider theme={csTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </CacheProvider>
  );
}
