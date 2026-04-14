'use client';

import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, IconButton, InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function ResetPasswordPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const pageBackground = isDark ? '#07081a' : '#f4f7fc';
  const panelBackground = isDark ? 'rgba(7,8,26,0.95)' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const textSecondary = isDark ? '#8892b0' : '#5e6b84';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';
  const iconColor = isDark ? '#8892b0' : '#5e6b84';

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
          overflow: 'hidden',
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
          px: { xs: 3, md: 5 },
          py: 4,
          backgroundColor: panelBackground,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: titleColor }}>
          Reset Password
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: textSecondary }}>
          Your new password must be different from previously used passwords
        </Typography>

        <TextField
          fullWidth
          placeholder="New Password"
          type={show1 ? 'text' : 'password'}
          size="small"
          sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }}
          slotProps={{ input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShow1(!show1)} sx={{ color: iconColor }}>
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
          sx={{ mb: 3, '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }}
          slotProps={{ input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShow2(!show2)} sx={{ color: iconColor }}>
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
