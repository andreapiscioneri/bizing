'use client';

import React from 'react';
import {
  Box, Typography, Button, Link as MuiLink,
} from '@mui/material';
import { EmailOutlined as MailIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function VerifyEmailPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const pageBackground = isDark ? '#07081a' : '#f4f7fc';
  const panelBackground = isDark ? 'rgba(7,8,26,0.95)' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const textSecondary = isDark ? '#8892b0' : '#5e6b84';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: pageBackground }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: isDark ? `url('/images/background-city.png') center/cover no-repeat` : `linear-gradient(135deg, rgba(244,247,252,0.9) 0%, rgba(244,247,252,0.65) 100%), url('/images/background-city.png') center/cover no-repeat`,
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: isDark ? 'rgba(7,8,26,0.75)' : 'rgba(244,247,252,0.82)' }} />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: 420 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 3, md: 5 },
          py: 4,
          textAlign: 'center',
          backgroundColor: panelBackground,
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: 'rgba(21,101,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
          }}
        >
          <MailIcon sx={{ color: '#1565FF', fontSize: 30 }} />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: titleColor }}>
          Verify your email
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: 320, mb: 3, color: textSecondary }}>
          Account activation link sent to your email address:{' '}
          <Box component="span" color="primary.main" sx={{ fontWeight: 600 }}>
            john.doe@email.com
          </Box>
          . Please follow the link inside to continue.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          sx={{ mb: 2, py: 1 }}
          component={Link}
          href="/login"
        >
          SKIP FOR NOW
        </Button>

        <Typography variant="body2" sx={{ color: textSecondary }}>
          Didn&apos;t get the mail?{' '}
          <MuiLink href="#" color="primary" sx={{ fontWeight: 600 }}>
            Resend
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
