'use client';

import React from 'react';
import {
  Box, Typography, Avatar, Button, Grid, Card, CardContent,
  Divider, Chip, Link as MuiLink,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Navigation as NavIcon,
  LocationOn as LocationIcon,
  Facebook, LinkedIn,
} from '@mui/icons-material';
import Link from 'next/link';

export default function UsersPage() {
  return (
    <Box>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {/* User header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mb: 1.5,
              border: '3px solid #1565FF',
              background: 'linear-gradient(135deg, #1565FF 0%, #00cfff 100%)',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            NC
          </Avatar>
          <Typography variant="h5"
              sx={{ fontWeight: 700, mb: 1.5 }}>
            Nome Cognome
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button variant="outlined" size="small" startIcon={<PhoneIcon fontSize="small" />} sx={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              CALL
            </Button>
            <Button variant="outlined" size="small" startIcon={<EmailIcon fontSize="small" />} sx={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              EMAIL
            </Button>
            <Button variant="outlined" size="small" startIcon={<NavIcon fontSize="small" />} sx={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              NAVIGATE
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Left: User details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                {[
                  { label: 'Email', value: 'nome@gmail.com' },
                  { label: 'Phone', value: '0021234524' },
                  { label: 'Organization', value: 'Genere' },
                  { label: 'Role', value: 'CEO' },
                  { label: 'Title', value: 'H' },
                  { label: 'URL', value: 'www.denani.it' },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: 'flex', py: 0.8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 110, fontSize: 12 }}>
                      {row.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 12 }}>
                      {row.value}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Right: Map + Social */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ mb: 2, overflow: 'hidden' }}>
              {/* Map placeholder */}
              <Box
                sx={{
                  width: '100%',
                  height: 180,
                  bgcolor: '#1a2a1a',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,100,0,0.15) 40px),
                      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,100,0,0.15) 40px)
                    `,
                    backgroundColor: '#1a2a1a',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <LocationIcon sx={{ color: '#f44336', fontSize: 28 }} />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 10,
                  }}
                >
                  Rambini, Galiasce 5.01...
                </Typography>
              </Box>
            </Card>

            {/* Social */}
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                  {[Facebook, 'tiktok', 'instagram', LinkedIn].map((Icon, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#8892b0',
                        fontSize: 12,
                        fontWeight: 700,
                        '&:hover': { borderColor: '#1565FF', color: '#1565FF' },
                      }}
                    >
                      {typeof Icon === 'string' ? Icon[0].toUpperCase() : <Icon sx={{ fontSize: 16 }} />}
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ borderColor: '#1565FF', color: '#1565FF', mb: 1.5 }}
                >
                  Visualizza eCard
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
