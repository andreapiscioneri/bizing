'use client';

import React from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Button, Avatar,
  TextField, InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  UploadFile as UploadFileIcon,
  FileDownload as FileDownloadIcon,
  Campaign as CampaignIcon,
  BarChart as BarChartIcon,
  Key as KeyIcon,
  Archive as ArchiveIcon,
} from '@mui/icons-material';

const commands = [
  { name: 'Export Users', description: 'Export all users data to CSV format', icon: UploadFileIcon },
  { name: 'Import Users', description: 'Import users from a CSV file', icon: FileDownloadIcon },
  { name: 'Send Newsletter', description: 'Send newsletter to all users', icon: CampaignIcon },
  { name: 'Generate Report', description: 'Generate analytics report', icon: BarChartIcon },
  { name: 'Reset Passwords', description: 'Force password reset for selected users', icon: KeyIcon },
  { name: 'Archive Users', description: 'Archive inactive user accounts', icon: ArchiveIcon },
];

export default function UserCommandsPage() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="h5">User Commands</Typography>
        <TextField
          placeholder="Search commands..."
          size="small"
          sx={{ width: { xs: '100%', sm: 240 } }}
          slotProps={{ input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18, color: '#8892b0' }} />
              </InputAdornment>
            ),
          } }}
        />
      </Box>

      <Grid container spacing={2.5}>
        {commands.map((cmd) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cmd.name}>
            <Card sx={{ cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: 'rgba(21,101,255,0.4)', transform: 'translateY(-2px)' } }}>
              <CardContent>
                <Avatar sx={{ width: 40, height: 40, mb: 1.5, bgcolor: 'rgba(21,101,255,0.15)', color: '#4d8aff' }}>
                  <cmd.icon sx={{ fontSize: 22 }} />
                </Avatar>
                <Typography variant="body1">{cmd.name}</Typography>
                <Typography variant="caption" color="text.secondary">{cmd.description}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="outlined" size="small" color="primary">
                    Execute
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
