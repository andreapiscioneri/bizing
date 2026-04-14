'use client';

import React, { useRef, useState } from 'react';
import {
  Box, Typography, Grid, TextField, Button, Avatar, IconButton,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  PhotoCamera as CameraIcon,
} from '@mui/icons-material';

export default function NewECardPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [brandLogoUrl, setBrandLogoUrl] = useState('/images/logo.png');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const helperColor = isDark ? '#8892b0' : '#5e6b84';

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setBrandLogoUrl(previewUrl);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 980, mx: 'auto' }}>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 3, color: titleColor }}>
        New eCard
      </Typography>

      {/* Avatar Upload */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <TextField
          placeholder="Card Name"
          size="small"
          sx={{ mb: 2.5, width: '100%', maxWidth: 280 }}
        />
        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            width: '100%',
            maxWidth: 360,
            minHeight: 180,
            borderRadius: 3,
            border: `1px dashed ${isDark ? 'rgba(255,255,255,0.16)' : 'rgba(21,34,56,0.18)'}`,
            background: isDark
              ? 'linear-gradient(180deg, rgba(13,14,40,0.96) 0%, rgba(10,11,34,0.96) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(237,244,255,0.98) 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            px: 2,
            py: 3,
            mb: 0.5,
            '&:hover': { borderColor: '#1565FF' },
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleLogoUpload}
          />

          <Box
            component="img"
            src={brandLogoUrl}
            alt="Brand logo preview"
            sx={{
              position: 'absolute',
              inset: 0,
              margin: 'auto',
              width: '72%',
              height: '72%',
              objectFit: 'contain',
              opacity: 0.14,
              filter: 'grayscale(1) contrast(1.1)',
              pointerEvents: 'none',
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{
                width: 84,
                height: 84,
                bgcolor: isDark ? 'rgba(21,101,255,0.12)' : 'rgba(21,101,255,0.08)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.12)'}`,
              }}
            >
              <CameraIcon sx={{ fontSize: 32, color: '#8892b0' }} />
            </Avatar>
            <Typography variant="body2" sx={{ fontWeight: 600, color: titleColor, textAlign: 'center' }}>
              Upload your brand logo
            </Typography>
            <Typography variant="caption" sx={{ color: helperColor, textAlign: 'center' }}>
              Click here to upload or replace the logo
            </Typography>
          </Box>

          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              top: 14,
              right: 14,
              bgcolor: '#1565FF',
              width: 28,
              height: 28,
              '&:hover': { bgcolor: '#0040cc' },
            }}
          >
            <CameraIcon sx={{ fontSize: 16, color: '#fff' }} />
          </IconButton>
        </Box>
        <Box
          component="img"
          src="/images/card-main.png"
          alt="Card preview"
          sx={{
            width: '100%',
            maxWidth: 520,
            height: 'auto',
            mt: 2.5,
            borderRadius: 2,
            boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
            opacity: isDark ? 1 : 0.98,
          }}
        />
      </Box>

      {/* Personal Info */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="First name" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Last name" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Mobile number" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Company" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Role" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Job title" size="small" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField fullWidth placeholder="Business email" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Office phone" size="small" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth placeholder="Website" size="small" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Home Address */}
      <Typography variant="subtitle2" color="text.secondary"
              sx={{ mb: 1.5 }}>
        Home address
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}><TextField fullWidth placeholder="Street" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth placeholder="City" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 8 }}><TextField fullWidth placeholder="State/Province" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth placeholder="Postal code" size="small" /></Grid>
        <Grid size={{ xs: 12 }}><TextField fullWidth placeholder="Country" size="small" /></Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Work Address */}
      <Typography variant="subtitle2" sx={{ color: helperColor, mb: 1.5 }}>
        Work address
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 8 }}><TextField fullWidth placeholder="Street" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth placeholder="City" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 8 }}><TextField fullWidth placeholder="State/Province" size="small" /></Grid>
        <Grid size={{ xs: 12, md: 4 }}><TextField fullWidth placeholder="Postal code" size="small" /></Grid>
        <Grid size={{ xs: 12 }}><TextField fullWidth placeholder="Country" size="small" /></Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Social URLs */}
      <Typography variant="subtitle2" sx={{ color: helperColor, mb: 1.5 }}>
        Social profiles
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth placeholder="Facebook profile" size="small" /></Grid>
        <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth placeholder="Instagram profile" size="small" /></Grid>
        <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth placeholder="TikTok profile" size="small" /></Grid>
        <Grid size={{ xs: 12, sm: 6 }}><TextField fullWidth placeholder="LinkedIn profile" size="small" /></Grid>
      </Grid>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" size="medium" sx={{ px: 4 }}>
          SUBMIT
        </Button>
        <Button variant="outlined" color="inherit" size="medium" sx={{ px: 4, borderColor: 'rgba(255,255,255,0.2)' }}>
          RESET
        </Button>
      </Box>
    </Box>
  );
}
