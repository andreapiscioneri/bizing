'use client';

import React from 'react';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Grid, Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ContactsPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const inputColor = isDark ? '#fff' : '#152238';
  const inputBorder = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(21,34,56,0.18)';
  const inputBg = isDark ? 'transparent' : 'rgba(21,34,56,0.02)';

  return (
    <Box>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 3 }}>
        Contact us
      </Typography>

      <Box
        sx={{
          maxWidth: 720,
          mx: 'auto',
          background: isDark
            ? 'linear-gradient(135deg, #0d0e28 0%, #0a0b22 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #eef4ff 100%)',
          borderRadius: 3,
          p: 4,
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)'}`,
        }}
      >
        {/* Logo centered */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: '3px solid #1565FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 1,
              }}
            >
              <Typography sx={{ fontSize: 28, fontWeight: 700, color: '#1565FF' }}>B</Typography>
            </Box>
            <Typography sx={{ fontSize: 22, fontWeight: 700, color: '#1565FF' }}>Bizing</Typography>
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: '#1565FF', letterSpacing: '0.15em' }}>
              BUSINESS ATTITUDE
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              placeholder="Enter your first name"
              size="small"
              variant="standard"
              slotProps={{ input: { sx: { color: inputColor, backgroundColor: inputBg, '&:before': { borderColor: inputBorder } } } }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              placeholder="Enter your last name"
              size="small"
              variant="standard"
              slotProps={{ input: { sx: { color: inputColor, backgroundColor: inputBg, '&:before': { borderColor: inputBorder } } } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              placeholder="Enter your business email"
              size="small"
              variant="standard"
              slotProps={{ input: { sx: { color: inputColor, backgroundColor: inputBg, '&:before': { borderColor: inputBorder } } } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              placeholder="Tell us how we can help"
              multiline
              rows={4}
              variant="standard"
              slotProps={{ input: { sx: { color: inputColor, backgroundColor: inputBg, '&:before': { borderColor: inputBorder } } } }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: isDark ? '#8892b0' : '#5e6b84' }} />}
            label={<Typography variant="body2" color="text.secondary">I agree to be contacted regarding my request</Typography>}
          />
          <Button variant="contained" color="primary" size="medium" sx={{ px: 4 }}>
            CONTACT US
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
