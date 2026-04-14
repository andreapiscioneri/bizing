'use client';

import { createTheme, type PaletteMode } from '@mui/material/styles';

export function getAppTheme(mode: PaletteMode) {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#1565FF',
        light: '#4d8aff',
        dark: '#0040cc',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#00cfff',
        light: '#5ffaff',
        dark: '#009ecc',
        contrastText: '#000000',
      },
      background: {
        default: isDark ? '#07081a' : '#f4f7fc',
        paper: isDark ? '#0d0e28' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#152238',
        secondary: isDark ? '#8892b0' : '#5e6b84',
      },
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(21,34,56,0.12)',
      error: { main: '#f44336' },
      success: { main: '#00a152' },
      warning: { main: '#f59e0b' },
      info: { main: '#0288d1' },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'uppercase', fontWeight: 600 },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? '#07081a' : '#f4f7fc',
            scrollbarColor: `${isDark ? '#1565FF' : '#8aa9ff'} ${isDark ? '#0d0e28' : '#dde4f1'}`,
            '&::-webkit-scrollbar': { width: 6 },
            '&::-webkit-scrollbar-track': { background: isDark ? '#0d0e28' : '#dde4f1' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: isDark ? '#1565FF' : '#8aa9ff', borderRadius: 3 },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontWeight: 600,
            letterSpacing: '0.08em',
            '&.MuiButton-containedPrimary': {
              background: 'linear-gradient(135deg, #1565FF 0%, #0040cc 100%)',
              '&:hover': { background: 'linear-gradient(135deg, #4d8aff 0%, #1565FF 100%)' },
            },
            '&.MuiButton-outlinedPrimary': {
              borderColor: '#1565FF',
              '&:hover': { backgroundColor: 'rgba(21,101,255,0.08)' },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.02)',
              '& fieldset': { borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(21,34,56,0.18)' },
              '&:hover fieldset': { borderColor: 'rgba(21,101,255,0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#1565FF' },
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: isDark ? '#ffffff' : '#152238',
            '& input::placeholder, & textarea::placeholder': {
              color: isDark ? '#8892b0' : '#75839d',
              opacity: 1,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? '#8892b0' : '#5e6b84',
            '&.Mui-focused': { color: '#1565FF' },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: isDark ? '#8892b0' : '#5e6b84',
            '&.Mui-focused': { color: '#1565FF' },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: isDark ? '#8892b0' : '#5e6b84',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDark ? '#0d0e28' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.08)'}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDark ? '#0d0e28' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.08)'}`,
            borderRadius: 12,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            '&.Mui-selected': {
              backgroundColor: '#1565FF',
              '&:hover': { backgroundColor: '#1565FF' },
            },
            '&:hover': { backgroundColor: 'rgba(21,101,255,0.12)' },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 4, fontSize: 11, height: 22 },
          colorPrimary: { backgroundColor: 'rgba(21,101,255,0.2)', color: '#4d8aff' },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: { borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)' },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: { backgroundColor: '#1565FF' },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isDark ? '#1a1b3a' : '#1f2937',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.16)'}`,
          },
        },
      },
    },
  });
}

const theme = getAppTheme('dark');
export default theme;
