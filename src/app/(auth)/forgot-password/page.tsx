'use client';

import React from 'react';
import {
  Box, Typography, TextField, Button, Link as MuiLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  LockOutlined as LockIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function ForgotPasswordPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const pageBackground = isDark ? '#07081a' : '#f4f7fc';
  const panelBackground = isDark ? 'rgba(7,8,26,0.95)' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const textSecondary = isDark ? '#8892b0' : '#5e6b84';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: pageBackground }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: isDark
            ? `url('/images/background-city.png') center/cover no-repeat`
            : `linear-gradient(135deg, rgba(244,247,252,0.9) 0%, rgba(244,247,252,0.65) 100%), url('/images/background-city.png') center/cover no-repeat`,
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: isDark ? 'rgba(7,8,26,0.75)' : 'rgba(244,247,252,0.82)' }} />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: 420 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, md: 5 },
          py: 4,
          backgroundColor: panelBackground,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              bgcolor: 'rgba(21,101,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LockIcon sx={{ color: '#1565FF', fontSize: 28 }} />
          </Box>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, textAlign: 'center', color: titleColor }}>
          Forgot Password?
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', color: textSecondary }}>
          Enter your email and we&apos;ll send you instructions to reset your password
        </Typography>

        <TextField
          fullWidth
          placeholder="Email"
          type="email"
          size="small"
          sx={{
            mb: 2.5,
            '& .MuiOutlinedInput-root': {
              backgroundColor: inputBg,
              '& fieldset': { borderColor: inputBorder },
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          sx={{ mb: 2, py: 1 }}
          component={Link}
          href="/reset-password"
        >
          SEND RESET LINK
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', color: textSecondary }}>
          <MuiLink
            component={Link}
            href="/login"
            color="primary"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Back to login
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
