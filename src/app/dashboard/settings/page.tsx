'use client';

import React from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Switch, FormControlLabel,
  TextField, Button, Avatar, Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SettingsPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const subtitleColor = isDark ? '#8892b0' : '#5e6b84';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';
  const switchColor = isDark ? '#8892b0' : '#5e6b84';

  return (
    <Box>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 3, color: titleColor }}>
        Account Settings
      </Typography>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                  background: 'linear-gradient(135deg, #1565FF 0%, #00cfff 100%)',
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                JD
              </Avatar>
                <Typography variant="h6" sx={{ color: titleColor }}>John Doe</Typography>
                <Typography variant="body2" sx={{ color: subtitleColor }}>UX Designer</Typography>
                <Button variant="outlined" size="small" sx={{ mt: 2, borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(21,34,56,0.16)', color: titleColor }}>
                Change Photo
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: titleColor }}>Profile Details</Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth placeholder="First Name" size="small" defaultValue="John" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth placeholder="Last Name" size="small" defaultValue="Doe" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth placeholder="Email" size="small" defaultValue="john.doe@example.com" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth placeholder="Phone" size="small" defaultValue="+1 234 567 890" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField fullWidth placeholder="Role" size="small" defaultValue="UX Designer" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" size="medium" sx={{ mt: 2.5 }}>
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ color: titleColor }}>Notifications</Typography>
              {[
                { label: 'Email notifications', desc: 'Receive updates via email' },
                { label: 'Push notifications', desc: 'Receive push notifications' },
                { label: 'Newsletter', desc: 'Receive our weekly newsletter' },
              ].map((item) => (
                <Box key={item.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: titleColor }}>{item.label}</Typography>
                    <Typography variant="caption" sx={{ color: subtitleColor }}>{item.desc}</Typography>
                  </Box>
                  <Switch defaultChecked size="small" sx={{ color: switchColor }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
