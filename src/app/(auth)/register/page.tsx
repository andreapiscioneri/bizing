'use client';

import React from 'react';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Link as MuiLink, Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function RegisterPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const pageBackground = isDark ? '#07081a' : '#f4f7fc';
  const panelBackground = isDark ? 'rgba(7,8,26,0.95)' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const textSecondary = isDark ? '#8892b0' : '#5e6b84';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';
  const checkboxColor = isDark ? '#8892b0' : '#5e6b84';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: pageBackground }}>
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
          background: `
            ${isDark ? 'linear-gradient(135deg, rgba(7,8,26,0.6) 0%, rgba(7,8,26,0.4) 100%)' : 'linear-gradient(135deg, rgba(244,247,252,0.9) 0%, rgba(244,247,252,0.65) 100%)'},
            url('/images/background-city.png') center/cover no-repeat
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: isDark ? 'linear-gradient(135deg, rgba(21,101,255,0.05) 0%, rgba(7,8,26,0.85) 100%)' : 'linear-gradient(135deg, rgba(21,101,255,0.04) 0%, rgba(244,247,252,0.82) 100%)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          width: { xs: '100%', md: 460 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, md: 5 },
          py: 4,
          backgroundColor: panelBackground,
        }}
      >
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 4 }}>
          <BizingLogo size="medium" showText showSubtitle />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: titleColor }}>
          Account Information
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: textSecondary }}>
          Enter your account details
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Name" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Last name" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Email" type="email" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Password" type="password" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Address" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Mobile" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
          </Grid>
        </Grid>

        <FormControlLabel
          sx={{ mt: 2 }}
          control={<Checkbox size="small" sx={{ color: checkboxColor }} />}
          label={<Typography variant="body2" sx={{ color: textSecondary }}>I agree to the terms of service and privacy policy</Typography>}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          sx={{ mt: 2.5, py: 1 }}
          component={Link}
          href="/verify-email"
        >
          NEXT
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, color: textSecondary }}>
          Already have an account?{' '}
          <MuiLink component={Link} href="/login" color="primary" sx={{ fontWeight: 600 }}>
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
