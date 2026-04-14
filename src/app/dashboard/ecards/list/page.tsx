'use client';

import React from 'react';
import {
  Box, Typography, Grid, Card, CardContent, CardActions,
  Avatar, IconButton, Chip, Menu, MenuItem,
} from '@mui/material';
import {
  StarBorderOutlined as StarIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const ecards = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: 'React Developers',
  description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
  tags: ['React', 'Developer'],
  starred: false,
}));

export default function ECardsListPage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Box>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 3 }}>
        Your eCards
      </Typography>

      <Grid container spacing={2.5}>
        {ecards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
                '&:hover': { borderColor: 'rgba(21,101,255,0.4)', transform: 'translateY(-2px)' },
              }}
            >
              <CardContent sx={{ flex: 1, pb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: 'linear-gradient(135deg, #1565FF 0%, #00cfff 100%)',
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    R
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{lineHeight: 1.2, fontWeight: 700}}>
                      {card.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small" sx={{ color: '#8892b0' }}>
                      <StarIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: '#8892b0' }}
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                      <MoreIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ pt: 0, px: 2, pb: 1.5, gap: 0.5 }}>
                {card.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(21,101,255,0.15)',
                      color: '#4d8aff',
                      fontSize: 10,
                      height: 20,
                    }}
                  />
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        slotProps={{ paper: { sx: { bgcolor: '#0d0e28', border: '1px solid rgba(255,255,255,0.1)' } } }}
      >
        <MenuItem onClick={() => setAnchorEl(null)} dense>Edit</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} dense>Duplicate</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} dense sx={{ color: '#f44336' }}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}
