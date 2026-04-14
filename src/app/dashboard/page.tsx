'use client';

import React from 'react';
import {
  Box, Typography, TextField, InputAdornment, Grid, Card, CardContent,
  CardHeader, IconButton, Avatar, Chip, Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Search as SearchIcon,
  MoreVert as MoreIcon,
  CreditCard as CardIcon,
  ContactMail as ECardIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, Legend,
} from 'recharts';

const barData = [
  { name: 'Jan', dataOne: 40, dataTwo: 24 },
  { name: 'Feb', dataOne: 30, dataTwo: 13 },
  { name: 'Mar', dataOne: 60, dataTwo: 98 },
  { name: 'Apr', dataOne: 80, dataTwo: 39 },
  { name: 'May', dataOne: 50, dataTwo: 48 },
  { name: 'Jun', dataOne: 90, dataTwo: 38 },
  { name: 'Jul', dataOne: 70, dataTwo: 43 },
];

const areaData = [
  { name: 'Jan', zoneOne: 20, zoneTwo: 40 },
  { name: 'Feb', zoneOne: 50, zoneTwo: 30 },
  { name: 'Mar', zoneOne: 30, zoneTwo: 60 },
  { name: 'Apr', zoneOne: 80, zoneTwo: 50 },
  { name: 'May', zoneOne: 60, zoneTwo: 90 },
  { name: 'Jun', zoneOne: 70, zoneTwo: 40 },
  { name: 'Jul', zoneOne: 90, zoneTwo: 70 },
  { name: 'Aug', zoneOne: 50, zoneTwo: 80 },
];

const pieData = [
  { name: 'New leads', value: 35, color: '#1565FF' },
  { name: 'Active clients', value: 25, color: '#00cfff' },
  { name: 'Pending', value: 40, color: '#334' },
];

const personalAssets = [
  { icon: <CardIcon sx={{ fontSize: 28, color: '#8892b0' }} />, label: 'Card', description: 'This article will show you how to expand the functionality of the App.' },
  { icon: <ECardIcon sx={{ fontSize: 28, color: '#1565FF' }} />, label: 'eCards', description: 'This article will show you how to expand the functionality of the App.', active: true },
  { icon: <PersonIcon sx={{ fontSize: 28, color: '#8892b0' }} />, label: 'Identity', description: 'This article will show you how to expand the functionality of the App.' },
];

export default function DashboardPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const subtitleColor = isDark ? '#8892b0' : '#5e6b84';
  const axisColor = isDark ? '#8892b0' : '#6b7a93';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(21,34,56,0.08)';
  const chartTooltipStyle = {
    backgroundColor: isDark ? '#0d0e28' : '#ffffff',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.12)'}`,
    borderRadius: 8,
    color: isDark ? '#fff' : '#152238',
  };

  return (
    <Box>
      {/* Search Hero */}
      <Box
        sx={{
          background: isDark
            ? 'linear-gradient(135deg, #0d1440 0%, #0a0b22 100%)'
            : 'linear-gradient(135deg, #edf4ff 0%, #dfeaff 100%)',
          borderRadius: 2,
          p: 4,
          textAlign: 'center',
          mb: 3,
          border: `1px solid ${isDark ? 'rgba(21,101,255,0.15)' : 'rgba(21,101,255,0.16)'}`,
        }}
      >
        <Typography variant="h5" sx={{color: isDark ? '#4d8aff' : '#1565FF', fontWeight: 700, mb: 0.5}}>
          Hello, how can we help?
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: subtitleColor }}>
          or choose a category to quickly find the help you need
        </Typography>
        <TextField
          placeholder="Ask a question..."
          size="small"
          sx={{
            width: '100%',
            maxWidth: 480,
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
            },
          }}
          slotProps={{ input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#8892b0', fontSize: 18 }} />
              </InputAdornment>
            ),
          } }}
        />
      </Box>

      {/* Analytics Title */}
            <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: titleColor }}>
        Analytics
      </Typography>

      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {/* Bar Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={<Typography variant="body1" sx={{ color: titleColor }}>Monthly user growth</Typography>}
              action={<IconButton size="small"><MoreIcon fontSize="small" /></IconButton>}
              sx={{ pb: 0 }}
              subheader={
                <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#1565FF' }} />
                    <Typography variant="caption" sx={{ color: subtitleColor }}>New users</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#00cfff' }} />
                    <Typography variant="caption" sx={{ color: subtitleColor }}>Active users</Typography>
                  </Box>
                </Box>
              }
            />
            <CardContent sx={{ pt: 1 }}>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData} barSize={8} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    labelStyle={{ color: isDark ? '#fff' : '#152238' }}
                  />
                  <Bar dataKey="dataOne" fill="#1565FF" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="dataTwo" fill="#00cfff" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={<Typography variant="body1" sx={{ color: titleColor }}>Account status distribution</Typography>}
              action={<IconButton size="small"><MoreIcon fontSize="small" /></IconButton>}
              sx={{ pb: 0 }}
              subheader={<Typography variant="caption" sx={{ color: subtitleColor }}>Percentage breakdown by account status</Typography>}
            />
            <CardContent sx={{ pt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ResponsiveContainer width={140} height={160}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={65}
                      dataKey="value"
                      paddingAngle={1}
                      stroke="rgba(255, 255, 255, 0.56)"
                      strokeWidth={1}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                        contentStyle={chartTooltipStyle}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{ flex: 1 }}>
                  {pieData.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: item.color, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: titleColor }}>{item.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Area Chart */}
        <Grid size={{ xs: 12 }}>
          <Card>
            <CardHeader
              title={<Typography variant="body1" sx={{ color: titleColor }}>Operational performance</Typography>}
              sx={{ pb: 0 }}
              subheader={
                <Box>
                  <Typography variant="caption" sx={{ color: subtitleColor }}>
                    Real-time tracking of handled requests and average response time
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#1565FF' }} />
                      <Typography variant="caption" sx={{ color: subtitleColor }}>Zone one</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#00cfff' }} />
                      <Typography variant="caption" sx={{ color: subtitleColor }}>Zone two</Typography>
                    </Box>
                  </Box>
                </Box>
              }
            />
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <Avatar src="/images/avatar.jpg" sx={{ width: 28, height: 28 }} />
                <Typography variant="caption" sx={{ color: subtitleColor }}>Last 24-hour update</Typography>
                <Box sx={{ flex: 1 }} />
                <Typography variant="caption" color="primary.main"
              sx={{ fontWeight: 700 }}>
                  +21.80%
                </Typography>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorZone1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1565FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1565FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorZone2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00cfff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00cfff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: axisColor }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    labelStyle={{ color: isDark ? '#fff' : '#152238' }}
                  />
                  <Area type="monotone" dataKey="zoneOne" stroke="#1565FF" fill="url(#colorZone1)" strokeWidth={2} dot={false} />
                  <Area type="monotone" dataKey="zoneTwo" stroke="#00cfff" fill="url(#colorZone2)" strokeWidth={2} dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Personal Assets */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: titleColor }}>
        Personal assets
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {personalAssets.map((asset, i) => (
          <Grid size={{ xs: 12, sm: 4 }} key={i}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: asset.active ? '1px solid #1565FF' : '1px solid rgba(255,255,255,0.06)',
                '&:hover': { borderColor: '#1565FF', transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ mb: 1.5 }}>{asset.icon}</Box>
              <Typography variant="body2" sx={{ color: titleColor }}>{asset.label}</Typography>
              <Typography variant="caption" sx={{ color: subtitleColor }}>{asset.description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Settings */}
      <Typography variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: titleColor }}>
        Settings
      </Typography>
      <Grid container spacing={2}>
        {[
          { icon: <PersonIcon sx={{ fontSize: 28 }} />, label: 'Account', sub: 'More Actions' },
          { icon: <PersonIcon sx={{ fontSize: 28 }} />, label: 'User Commands', sub: 'More Actions' },
        ].map((item, i) => (
          <Grid size={{ xs: 6, sm: 3 }} key={i}>
            <Card sx={{ textAlign: 'center', p: 2, cursor: 'pointer' }}>
              <Box sx={{ color: '#8892b0', mb: 1 }}>{item.icon}</Box>
              <Typography variant="body2" sx={{ color: titleColor }}>{item.label}</Typography>
              <Typography variant="caption" sx={{ color: subtitleColor }}>{item.sub}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
