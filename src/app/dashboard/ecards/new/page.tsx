'use client';

import React from 'react';
import {
  Box, Typography, Grid, TextField, Button, Avatar, IconButton,
  Divider,
} from '@mui/material';
import {
  PhotoCamera as CameraIcon,
} from '@mui/icons-material';

export default function NewECardPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: 980, mx: 'auto' }}>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 3 }}>
        New eCard
      </Typography>

      {/* Avatar Upload */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <TextField
          placeholder="Card Name"
          size="small"
          sx={{ mb: 2.5, width: '100%', maxWidth: 280 }}
        />
        <Box sx={{ position: 'relative' }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: '#1a1b3a',
              border: '2px solid rgba(255,255,255,0.1)',
            }}
          >
            <CameraIcon sx={{ fontSize: 32, color: '#8892b0' }} />
          </Avatar>
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: -4,
              bgcolor: '#1565FF',
              width: 24,
              height: 24,
              '&:hover': { bgcolor: '#0040cc' },
            }}
          >
            <CameraIcon sx={{ fontSize: 14, color: '#fff' }} />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ mt: 1.5, px: 3 }}
        >
          Upload
        </Button>
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
      <Typography variant="subtitle2" color="text.secondary"
              sx={{ mb: 1.5 }}>
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
      <Typography variant="subtitle2" color="text.secondary"
              sx={{ mb: 1.5 }}>
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
