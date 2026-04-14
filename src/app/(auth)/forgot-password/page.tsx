'use client';

import React from 'react';
import {
  Box, Typography, TextField, Button, Link as MuiLink,
} from '@mui/material';
import { LockOutlined as LockIcon } from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function ForgotPasswordPage() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#07081a' }}>
      {/* Left side */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `url('/images/city-bg.jpg') center/cover no-repeat`,
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(7,8,26,0.75)' }} />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          width: { xs: '100%', md: 420 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, md: 5 },
          py: 4,
          backgroundColor: 'rgba(7,8,26,0.95)',
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

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, textAlign: 'center' }}>
          Forgot Password?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          Enter your email and we&apos;ll send you instructions to reset your password
        </Typography>

        <TextField
          fullWidth
          placeholder="Email"
          type="email"
          size="small"
          sx={{ mb: 2.5 }}
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

        <Typography variant="body2" sx={{ textAlign: 'center' }} color="text.secondary">
          <MuiLink component={Link} href="/login" color="primary">
            ← Back to login
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
