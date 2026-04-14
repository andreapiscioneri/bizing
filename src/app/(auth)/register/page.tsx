'use client';

import React from 'react';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Link as MuiLink, Grid,
} from '@mui/material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function RegisterPage() {
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
          background: `
            linear-gradient(135deg, rgba(7,8,26,0.6) 0%, rgba(7,8,26,0.4) 100%),
            url('/images/background-city.png') center/cover no-repeat
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(21,101,255,0.05) 0%, rgba(7,8,26,0.85) 100%)',
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
          backgroundColor: 'rgba(7,8,26,0.95)',
        }}
      >
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 4 }}>
          <BizingLogo size="medium" showText showSubtitle />
        </Box>

        <Typography variant="h5"
              sx={{ fontWeight: 700, mb: 0.5 }}>
          Account Information
        </Typography>
        <Typography variant="body2" color="text.secondary"
              sx={{ mb: 3 }}>
          Enter Your Account Details
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Name" size="small" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Last name" size="small" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Email" type="email" size="small" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Password" type="password" size="small" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Address" size="small" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth placeholder="Mobile" size="small" />
          </Grid>
        </Grid>

        <FormControlLabel
          sx={{ mt: 2 }}
          control={<Checkbox size="small" sx={{ color: '#8892b0' }} />}
          label={<Typography variant="body2" color="text.secondary">Accetto termini di servizio e informativa privacy</Typography>}
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

        <Typography variant="body2" color="text.secondary"
              sx={{ textAlign: 'center', mt: 2 }}>
          Already have an account?{' '}
          <MuiLink component={Link} href="/login" color="primary" sx={{ fontWeight: 600 }}>
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
