'use client';

import React, { useState } from 'react';
import {
  Box, Typography, Avatar, Button, Grid, Card, CardContent,
  Tab, Tabs, Chip, List, ListItem, ListItemText, ListItemAvatar,
  IconButton, LinearProgress, Divider,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  PersonAdd as ConnectIcon,
  MoreVert as MoreIcon,
  Star as StarIcon,
  TrackChanges as TrackChangesIcon,
} from '@mui/icons-material';

const projects = [
  { name: 'Social Banners', owner: 'Client / Freelance / Internal', budget: '$24.86', totalBudget: '$136.68', start: '11/22', deadline: '01/22', progress: 45 },
  { name: 'Social Banners', owner: 'Client / Freelance / Internal', budget: '$24.86', totalBudget: '$136.68', start: '11/22', deadline: '01/22', progress: 65 },
  { name: 'Social Banners', owner: 'Client / Freelance / Internal', budget: '$24.86', totalBudget: '$136.68', start: '11/22', deadline: '01/22', progress: 30 },
];

const ecardList = [
  { name: 'Next Js E-Commerce App', leader: 'Elmer', color: '#4caf50' },
  { name: 'Human Logo Design', leader: 'Owen', color: '#2196f3' },
  { name: 'Dashboard Design', leader: 'Keith', color: '#9c27b0' },
  { name: 'Rodinery Mobile App', leader: 'Hector', color: '#ff9800' },
  { name: 'App Rest Project', leader: 'Raeanne', color: '#f44336' },
  { name: 'Blockchain Website', leader: 'Alison', color: '#00bcd4' },
];

const activities = [
  { text: '8 Invoices have been paid', sub: 'Invoices have been sent to the company', time: 'Yesterday', type: 'invoice' },
  { text: 'Create a new project for User', sub: 'Invoices have been sent to the company', time: 'Apr 20', type: 'project' },
  { text: "Order #37745 from September", sub: 'Invoices have been sent to the company', time: 'Oct 19', type: 'order' },
  { text: 'Public Meeting', sub: '', time: 'September 15', type: 'meeting' },
];

const cards = [
  { name: 'React Developers', members: 72, type: 'Business' },
  { name: 'Support Team', members: 22, type: 'Support' },
  { name: 'UX Designer', members: 25, type: 'Design' },
  { name: 'Vue.js Developers', members: 20, type: 'Business' },
  { name: 'Digital Marketing', members: 35, type: 'Business' },
];

const connections = [
  { name: 'Cecile Payne', role: '23K Connections', img: '' },
  { name: 'Curtis Fletcher', role: '19K Connections', img: '' },
  { name: 'Alice Stone', role: '989 Connections', img: '' },
  { name: 'Darrel Barnes', role: '98 Connections', img: '' },
  { name: 'Eugenia Moore', role: '125K Connections', img: '' },
];

export default function UserProfilePage() {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      {/* Header Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0a1050 0%, #0d0e28 100%)',
          borderRadius: 2,
          mb: 0,
          height: 120,
          position: 'relative',
        }}
      />

      {/* Profile Info */}
      <Box
        sx={{
          px: 3,
          pb: 2,
          bgcolor: '#0d0e28',
          borderRadius: '0 0 12px 12px',
          mb: 2.5,
          border: '1px solid rgba(255,255,255,0.06)',
          borderTop: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            gap: 2,
            mt: -4,
            mb: 1.5,
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              border: '3px solid #0d0e28',
              background: 'linear-gradient(135deg, #1565FF 0%, #00cfff 100%)',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            JD
          </Avatar>
          <Box sx={{ flex: 1, pb: 0.5 }}>
            <Typography variant="h6">John Doe</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="caption" color="text.secondary">UX Designer</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LocationIcon sx={{ fontSize: 12, color: '#8892b0' }} />
                <Typography variant="caption" color="text.secondary">Vatican City</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarIcon sx={{ fontSize: 12, color: '#8892b0' }} />
                <Typography variant="caption" color="text.secondary">Joined April 2021</Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ConnectIcon fontSize="small" />}
            sx={{ px: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            Connect
          </Button>
        </Box>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': { fontSize: 12, minWidth: 80, px: 1.5, color: '#8892b0' },
            '& .Mui-selected': { color: '#1565FF !important' },
            '& .MuiTabs-indicator': { bgcolor: '#1565FF' },
          }}
        >
          <Tab label="Profile" />
          <Tab label="Team" />
          <Tab label="Projects" />
          <Tab label="Connections" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {tab === 0 && (
        <Grid container spacing={2.5}>
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="overline" color="text.secondary" sx={{ fontSize: 10, letterSpacing: '0.1em' }}>ABOUT</Typography>
                <Divider sx={{ my: 1 }} />
                {[
                  { label: 'Full Name', value: 'John Doe' },
                  { label: 'Status', value: 'Active', chip: true },
                  { label: 'Role', value: 'Developer' },
                  { label: 'Country', value: 'USA' },
                  { label: 'Language', value: 'English' },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: 'flex', py: 0.6 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ minWidth: 80 }}>
                      {row.label}
                    </Typography>
                    {row.chip ? (
                      <Chip label={row.value} size="small" sx={{ bgcolor: 'rgba(0,230,118,0.15)', color: '#00e676', height: 18, fontSize: 10 }} />
                    ) : (
                      <Typography variant="caption">{row.value}</Typography>
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="overline" color="text.secondary" sx={{ fontSize: 10 }}>CONTACTS</Typography>
                <Divider sx={{ my: 1 }} />
                {[
                  { label: 'Contact', value: '(123) 456-7890' },
                  { label: 'Skype', value: 'john.doe' },
                  { label: 'Email', value: 'john.doe@example.com' },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: 'flex', py: 0.6 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ minWidth: 80 }}>{row.label}</Typography>
                    <Typography variant="caption">{row.value}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="overline" color="text.secondary" sx={{ fontSize: 10 }}>TEAMS</Typography>
                <Divider sx={{ my: 1 }} />
                {['Backend Developer (33 Members)', 'React Developer (118 Members)'].map((t) => (
                  <Box key={t} sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.5 }}>
                    <Avatar sx={{ width: 22, height: 22, fontSize: 10, bgcolor: '#1565FF' }}>B</Avatar>
                    <Typography variant="caption">{t}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="overline" color="text.secondary" sx={{ fontSize: 10 }}>OVERVIEW</Typography>
                <Divider sx={{ my: 1 }} />
                {[
                  { label: 'Task Completed', value: '13.5k' },
                  { label: 'Connections', value: '897' },
                  { label: 'Projects Completed', value: '146' },
                ].map((row) => (
                  <Box key={row.label} sx={{ display: 'flex', py: 0.6 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ flex: 1 }}>{row.label}</Typography>
                    <Typography variant="caption">{row.value}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Activity Timeline */}
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 1.5 }}>
                  <TrackChangesIcon sx={{ fontSize: 18, color: '#4d8aff' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Activity Timeline
                  </Typography>
                </Box>
                {activities.map((a, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        mt: 0.5,
                        flexShrink: 0,
                        bgcolor: i === 0 ? '#f44336' : i === 1 ? '#1565FF' : i === 2 ? '#ff9800' : '#00e676',
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" sx={{fontSize: 12, fontWeight: 600}}>{a.text}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10 }}>{a.time}</Typography>
                      </Box>
                      {a.sub && <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>{a.sub}</Typography>}
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* Cards & Connections */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2">Card</Typography>
                    {cards.map((c) => (
                      <Box key={c.name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <Avatar sx={{ width: 28, height: 28, fontSize: 12, bgcolor: '#1565FF' }}>
                          {c.name[0]}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption">{c.name}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{fontSize: 10, display: 'block'}}>
                            {c.members} Members
                          </Typography>
                        </Box>
                        <Chip label={c.type} size="small" sx={{ fontSize: 9, height: 18, bgcolor: 'rgba(21,101,255,0.15)', color: '#4d8aff' }} />
                      </Box>
                    ))}
                    <Typography variant="caption" color="primary" sx={{ cursor: 'pointer', mt: 1, display: 'block' }}>
                      View all projects
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2">Connection</Typography>
                    {connections.map((c) => (
                      <Box key={c.name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <Avatar sx={{ width: 28, height: 28, fontSize: 12 }}>
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption">{c.name}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{fontSize: 10, display: 'block'}}>
                            {c.role}
                          </Typography>
                        </Box>
                        <Button size="small" variant="outlined" sx={{ fontSize: 9, py: 0.2, px: 1, minWidth: 0, borderColor: 'rgba(255,255,255,0.2)' }}>
                          +
                        </Button>
                      </Box>
                    ))}
                    <Typography variant="caption" color="primary" sx={{ cursor: 'pointer', mt: 1, display: 'block' }}>
                      View all connections
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* eCard List */}
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="subtitle2">eCard list</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0.5, mb: 1 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10 }}>PROJECT</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10 }}>LEADER</Typography>
                </Box>
                {ecardList.map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr',
                      gap: 0.5,
                      py: 0.8,
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: item.color, flexShrink: 0 }} />
                      <Typography variant="caption">{item.name}</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">{item.leader}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {tab === 2 && (
        <Grid container spacing={2}>
          {projects.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{p.name}</Typography>
                    <IconButton size="small"><MoreIcon fontSize="small" /></IconButton>
                  </Box>
                  <Typography variant="caption" color="text.secondary"
              sx={{ display: 'block', mb: 1 }}>
                    {p.owner}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Budget</Typography>
                      <Typography variant="body2">{p.budget}</Typography>
                      <Typography variant="caption" color="text.secondary">Total Budget: {p.totalBudget}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Start Date: {p.start}</Typography>
                      <Typography variant="body2"></Typography>
                      <Typography variant="caption" color="text.secondary">Deadline: {p.deadline}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">All Hours</Typography>
                      <Typography variant="caption">{p.progress}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={p.progress}
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        bgcolor: 'rgba(255,255,255,0.08)',
                        '& .MuiLinearProgress-bar': { bgcolor: '#1565FF', borderRadius: 2 },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
