'use client';

import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Link as MuiLink, IconButton, InputAdornment, Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#07081a' }}>
      <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(7,8,26,0.75) 0%, rgba(21,101,255,0.08) 100%), url("/images/city-bg.jpg") center/cover no-repeat' }}>
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', md: 420 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 3, md: 5 }, py: 4, backgroundColor: 'rgba(7,8,26,0.95)' }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 4 }}>
          <BizingLogo size="medium" showText showSubtitle />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>Welcome to Bizing</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3.5 }}>Please sign-in to your account and start the adventure</Typography>
        <TextField fullWidth placeholder="Email" type="email" size="small" sx={{ mb: 2 }} />
        <TextField fullWidth placeholder="Password" type={showPassword ? 'text' : 'password'} size="small" sx={{ mb: 1.5 }} slotProps={{ input: { endAdornment: (<InputAdornment position="end"><IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">{showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}</IconButton></InputAdornment>) } }} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <FormControlLabel control={<Checkbox size="small" sx={{ color: '#8892b0' }} />} label={<Typography variant="body2" color="text.secondary">Remember Me</Typography>} />
          <MuiLink component={Link} href="/forgot-password" variant="body2" color="primary">Forget Password?</MuiLink>
        </Box>
        <Button fullWidth variant="contained" color="primary" size="medium" sx={{ mb: 2, py: 1 }} component={Link} href="/dashboard">LOGIN</Button>
        <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }} color="text.secondary">
          New on our platform?{' '}
          <MuiLink component={Link} href="/register" color="primary" sx={{ fontWeight: 600 }}>Create an account</MuiLink>
        </Typography>
        <Divider sx={{ my: 2 }}><Typography variant="caption" color="text.secondary">or</Typography></Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {['f', 'T', '📷', 'in'].map((icon, i) => (
            <IconButton key={i} size="small" sx={{ color: '#8892b0', border: '1px solid rgba(255,255,255,0.1)', width: 36, height: 36, fontSize: 13, '&:hover': { color: '#1565FF', borderColor: '#1565FF' } }}>{icon}</IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
