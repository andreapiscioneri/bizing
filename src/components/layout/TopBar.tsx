'use client';

import React from 'react';
import {
  AppBar, Toolbar, IconButton, Badge, Avatar, Box, Tooltip, Switch,
} from '@mui/material';
import {
  NotificationsOutlined as NotifIcon,
  WbSunny as SunIcon,
  NightlightRound as MoonIcon,
} from '@mui/icons-material';

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - 220px)`,
        ml: `220px`,
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(10px)',
        zIndex: (theme) => theme.zIndex.drawer - 1,
      }}
    >
      <Toolbar sx={{ minHeight: '52px !important', px: 2, justifyContent: 'flex-end', gap: 1 }}>
        {/* Dark/Light toggle (cosmetic) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <MoonIcon sx={{ fontSize: 16, color: '#8892b0' }} />
        </Box>

        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ color: '#8892b0', '&:hover': { color: '#fff' } }}>
            <Badge badgeContent={4} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16 } }}>
              <NotifIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* User Avatar */}
        <Tooltip title="Profile">
          <Avatar
            src="/images/avatar.jpg"
            sx={{ width: 30, height: 30, cursor: 'pointer', border: '2px solid #1565FF' }}
          />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
