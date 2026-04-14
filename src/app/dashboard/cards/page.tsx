'use client';

import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Button, Chip,
  TextField, Checkbox, FormControlLabel, Divider, IconButton,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
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
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <Box>
      {/* Metal Card Color Selector */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 3 }}>
        Choose your metal card color
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, gap: 2 }}>
        <IconButton onClick={() => setSelectedColor((p) => (p - 1 + cardColors.length) % cardColors.length)}>
          <ChevronLeftIcon />
        </IconButton>

        {/* 3D-like Card Display */}
        <Box
          sx={{
            width: 320,
            height: 200,
            position: 'relative',
            perspective: '800px',
          }}
        >
          {/* Shadow card behind */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%) rotateX(15deg)',
              width: 260,
              height: 160,
              borderRadius: 3,
              background: 'rgba(0,0,0,0.3)',
              filter: 'blur(8px)',
            }}
          />
          {/* Main card */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-55%) rotateY(-15deg)',
              width: 260,
              height: 160,
              borderRadius: 3,
              background: cardColors[selectedColor].bg,
              boxShadow: '8px 8px 20px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                B
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
                BIZING · BUSINESS ATTITUDE
              </Typography>
            </Box>
          </Box>

          {/* Second card slightly offset */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-45%) rotateY(-8deg)',
              width: 260,
              height: 160,
              borderRadius: 3,
              background: cardColors[(selectedColor + 1) % cardColors.length].bg,
              boxShadow: '4px 4px 12px rgba(0,0,0,0.3)',
              opacity: 0.6,
            }}
          />
        </Box>

        <IconButton onClick={() => setSelectedColor((p) => (p + 1) % cardColors.length)}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Color dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
        {cardColors.map((c, i) => (
          <Box
            key={i}
            onClick={() => setSelectedColor(i)}
            sx={{
              width: i === selectedColor ? 20 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: c.color,
              cursor: 'pointer',
              transition: 'width 0.2s',
              border: i === selectedColor ? '2px solid #fff' : 'none',
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
            <Typography variant="body2" color="text.secondary">Upload your brand logo</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          {/* Preview Card */}
          <Box
            sx={{
              background: cardColors[selectedColor].bg,
              borderRadius: 3,
              p: 2.5,
              minHeight: 160,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                B
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                DENANI · ANDREA PISCIONERI
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Card Information */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2 }}>
        Customize your card information
      </Typography>

      <TextField
        placeholder="Your text here"
        size="small"
        sx={{ mb: 2, maxWidth: 320, display: 'block' }}
      />

      <FormControlLabel
        control={<Checkbox size="small" />}
        label={<Typography variant="body2" color="text.secondary">Accept Lorem ipsum</Typography>}
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
