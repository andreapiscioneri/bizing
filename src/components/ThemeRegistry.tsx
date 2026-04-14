'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, type PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useServerInsertedHTML } from 'next/navigation';
import { getAppTheme } from '@/theme/theme';

type ThemeModeContextValue = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

function createEmotionCache() {
  const cache = createCache({ key: 'mui', prepend: true });
  cache.compat = true;
  return cache;
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used inside ThemeRegistry');
  }
  return context;
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [emotionCache] = useState<EmotionCache>(() => createEmotionCache());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedMode = window.localStorage.getItem('bizing-theme-mode');
    if (storedMode === 'dark' || storedMode === 'light') {
      setMode(storedMode);
    }
  }, []);

  useServerInsertedHTML(() => {
    const insertedNames = Object.keys(emotionCache.inserted);
    const insertedStyles = insertedNames
      .map((name) => emotionCache.inserted[name])
      .filter((style): style is string => typeof style === 'string')
      .join('');

    if (!insertedStyles) {
      return null;
    }

    return (
      <style
        data-emotion={`${emotionCache.key} ${insertedNames.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: insertedStyles }}
      />
    );
  });

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('bizing-theme-mode', next);
      return next;
    });
  };

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {mounted ? children : children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeModeContext.Provider>
  );
}
