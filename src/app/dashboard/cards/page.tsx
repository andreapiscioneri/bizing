'use client';

import React from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Button, Chip,
  TextField, Checkbox, FormControlLabel, Divider,
} from '@mui/material';
import {
  FileUploadOutlined as UploadIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const cardColors = [
  { label: 'Silver', color: '#C0C0C0', bg: 'linear-gradient(135deg, #a8a8a8 0%, #d4d4d4 50%, #8a8a8a 100%)' },
  { label: 'Gold', color: '#FFD700', bg: 'linear-gradient(135deg, #b8860b 0%, #ffd700 50%, #8b6914 100%)' },
  { label: 'Rose Gold', color: '#B76E79', bg: 'linear-gradient(135deg, #8b4e57 0%, #d4a0a8 50%, #8b4e57 100%)' },
  { label: 'Black', color: '#111', bg: 'linear-gradient(135deg, #111 0%, #333 50%, #111 100%)' },
];

export default function CardsPage() {
  return (
    <Box>
      {/* Metal Card Color Selector */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 3 }}>
        Choose your metal card design
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
        <Box
          component="img"
          src="/images/card-hero.png"
          alt="Bizing metal card preview"
          sx={{
            width: '100%',
            maxWidth: 640,
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.35))',
          }}
        />
      </Box>

      {/* Color dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
        {cardColors.map((c, i) => (
          <Box
            key={i}
            sx={{
              width: 12,
              height: 10,
              borderRadius: 5,
              bgcolor: c.color,
              opacity: 0.75,
            }}
          />
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Brand Identity */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2.5 }}>
        Customize your brand identity
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: '2px dashed rgba(255,255,255,0.15)',
              borderRadius: 2,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              minHeight: 160,
              transition: 'border-color 0.2s',
              '&:hover': { borderColor: '#1565FF' },
            }}
          >
            <UploadIcon sx={{ fontSize: 36, color: '#8892b0', mb: 1 }} />
            <Box
              component="img"
              src="/images/logo-stacked.png"
              alt="Bizing logo"
              sx={{ width: 96, height: 'auto', mb: 1.2 }}
            />
            <Typography variant="body2" color="text.secondary">Upload your brand logo</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          {/* Preview Card */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #111827 0%, #2a3344 100%)',
              borderRadius: 3,
              p: 3,
              minHeight: 220,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}
          >
            <Box
              component="img"
              src="/images/card-main.png"
              alt="Bizing business card"
              sx={{ width: '100%', maxWidth: 560, height: 'auto', objectFit: 'contain' }}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Card Information */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2 }}>
        Customize card details
      </Typography>

      <TextField
        placeholder="Enter the name to print on the card"
        size="small"
        sx={{ mb: 2, width: '100%', maxWidth: 480, display: 'block' }}
      />

      <FormControlLabel
        control={<Checkbox size="small" />}
        label={<Typography variant="body2" color="text.secondary">I confirm that the card details are accurate</Typography>}
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        color="primary"
        size="medium"
        sx={{ px: 4 }}
        component={Link}
        href="/dashboard/cards/payment"
      >
        NEXT
      </Button>
    </Box>
  );
}
