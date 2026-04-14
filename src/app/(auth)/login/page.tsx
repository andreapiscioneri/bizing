'use client';

import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Link as MuiLink, IconButton, InputAdornment, Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Visibility,
  VisibilityOff,
  Facebook as FacebookIcon,
  X as XIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import BizingLogo from '@/components/BizingLogo';

const socialIcons = [
  { label: 'facebook', Icon: FacebookIcon },
  { label: 'x', Icon: XIcon },
  { label: 'instagram', Icon: InstagramIcon },
  { label: 'linkedin', Icon: LinkedInIcon },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const pageBackground = isDark ? '#07081a' : '#f4f7fc';
  const panelBackground = isDark ? 'rgba(7,8,26,0.95)' : '#ffffff';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const textSecondary = isDark ? '#8892b0' : '#5e6b84';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const iconColor = isDark ? '#8892b0' : '#5e6b84';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: pageBackground }}>
      <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: isDark ? 'linear-gradient(135deg, rgba(7,8,26,0.75) 0%, rgba(21,101,255,0.08) 100%), url("/images/background-city.png") center/cover no-repeat' : 'linear-gradient(135deg, rgba(244,247,252,0.88) 0%, rgba(21,101,255,0.08) 100%), url("/images/background-city.png") center/cover no-repeat' }}>
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <BizingLogo size="large" showText showSubtitle />
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', md: 420 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 3, md: 5 }, py: 4, backgroundColor: panelBackground, borderLeft: { md: isDark ? 'none' : '1px solid rgba(21,34,56,0.12)' } }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 4 }}>
          <BizingLogo size="medium" showText showSubtitle />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: titleColor }}>Welcome to Bizing</Typography>
        <Typography variant="body2" sx={{ mb: 3.5, color: textSecondary }}>Please sign in to your account and continue</Typography>
        <TextField
          fullWidth
          placeholder="Email"
          type="email"
          size="small"
          sx={{ mb: 2, '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }}
        />
        <TextField
          fullWidth
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          size="small"
          sx={{ mb: 1.5, '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }}
          slotProps={{ input: { endAdornment: (<InputAdornment position="end"><IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: iconColor }}>{showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}</IconButton></InputAdornment>) } }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <FormControlLabel control={<Checkbox size="small" sx={{ color: iconColor }} />} label={<Typography variant="body2" sx={{ color: textSecondary }}>Remember me</Typography>} />
          <MuiLink component={Link} href="/forgot-password" variant="body2" color="primary">Forgot password?</MuiLink>
        </Box>
        <Button fullWidth variant="contained" color="primary" size="medium" sx={{ mb: 2, py: 1 }} component={Link} href="/dashboard">LOGIN</Button>
        <Typography variant="body2" sx={{ textAlign: 'center', mb: 2, color: textSecondary }}>
          New on our platform?{' '}
          <MuiLink component={Link} href="/register" color="primary" sx={{ fontWeight: 600 }}>Create an account</MuiLink>
        </Typography>
        <Divider sx={{ my: 2, color: textSecondary }}><Typography variant="caption" sx={{ color: textSecondary }}>or</Typography></Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {socialIcons.map(({ label, Icon }) => (
            <IconButton
              key={label}
              size="small"
              aria-label={label}
              sx={{
                color: iconColor,
                border: `1px solid ${inputBorder}`,
                width: 36,
                height: 36,
                '&:hover': { color: '#1565FF', borderColor: '#1565FF' },
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
