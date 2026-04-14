'use client';

import React from 'react';
import {
  Box, Typography, Button, Link as MuiLink,
} from '@mui/material';
import { EmailOutlined as MailIcon } from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function VerifyEmailPage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#07081a' }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: `url('/images/background-city.png') center/cover no-repeat`,
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(7,8,26,0.75)' }} />
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
          backgroundColor: 'rgba(7,8,26,0.95)',
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

        <Typography variant="h5"
              sx={{ fontWeight: 700, mb: 1 }}>
          Verify your email
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 320, mb: 3 }}>
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

        <Typography variant="body2" color="text.secondary">
          Didn&apos;t get the mail?{' '}
          <MuiLink href="#" color="primary" sx={{ fontWeight: 600 }}>
            Resend
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
