'use client';

import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, IconButton, InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function ResetPasswordPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

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
          overflow: 'hidden',
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
          px: { xs: 3, md: 5 },
          py: 4,
          backgroundColor: 'rgba(7,8,26,0.95)',
        }}
      >
        <Typography variant="h5"
              sx={{ fontWeight: 700, mb: 0.5 }}>
          Reset Password
        </Typography>
        <Typography variant="body2" color="text.secondary"
              sx={{ mb: 3 }}>
          Your new password must be different from previously used passwords
        </Typography>

        <TextField
          fullWidth
          placeholder="New Password"
          type={show1 ? 'text' : 'password'}
          size="small"
          sx={{ mb: 2 }}
          slotProps={{ input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShow1(!show1)}>
                  {show1 ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          } }}
        />

        <TextField
          fullWidth
          placeholder="Confirm Password"
          type={show2 ? 'text' : 'password'}
          size="small"
          sx={{ mb: 3 }}
          slotProps={{ input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShow2(!show2)}>
                  {show2 ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          } }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          sx={{ py: 1 }}
          component={Link}
          href="/login"
        >
          SET NEW PASSWORD
        </Button>
      </Box>
    </Box>
  );
}
