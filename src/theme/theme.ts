'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
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
      default: '#07081a',
      paper: '#0d0e28',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8892b0',
    },
    divider: 'rgba(255,255,255,0.08)',
    error: { main: '#f44336' },
    success: { main: '#00e676' },
    warning: { main: '#ffa726' },
    info: { main: '#29b6f6' },
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
          backgroundColor: '#07081a',
          scrollbarColor: '#1565FF #0d0e28',
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-track': { background: '#0d0e28' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#1565FF', borderRadius: 3 },
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
            backgroundColor: 'rgba(255,255,255,0.03)',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(21,101,255,0.5)' },
            '&.Mui-focused fieldset': { borderColor: '#1565FF' },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0d0e28',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0d0e28',
          border: '1px solid rgba(255,255,255,0.06)',
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
        root: { borderColor: 'rgba(255,255,255,0.06)' },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: { backgroundColor: '#1565FF' },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { backgroundColor: '#1a1b3a', border: '1px solid rgba(255,255,255,0.1)' },
      },
    },
  },
});

export default theme;
