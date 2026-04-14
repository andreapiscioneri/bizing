'use client';

import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Badge, Avatar, Box, Tooltip, Menu, MenuItem, Typography, ListItemIcon,
} from '@mui/material';
import {
  NotificationsOutlined as NotifIcon,
  WbSunny as SunIcon,
  NightlightRound as MoonIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  MarkEmailReadOutlined as MarkEmailReadIcon,
  PaymentOutlined as PaymentIcon,
  GroupOutlined as GroupIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useThemeMode } from '@/components/ThemeRegistry';

const notifications = [
  { title: 'New payment received', subtitle: 'Order #38421 has been confirmed', icon: PaymentIcon },
  { title: 'New user registered', subtitle: 'Matteo Rinaldi created an account', icon: GroupIcon },
  { title: 'Setup reminder', subtitle: 'Complete your business card setup', icon: MarkEmailReadIcon },
];

export default function TopBar() {
  const [notifAnchorEl, setNotifAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, toggleMode } = useThemeMode();

  const isNotifOpen = Boolean(notifAnchorEl);
  const isProfileOpen = Boolean(profileAnchorEl);
  const isDark = mode === 'dark';

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: `calc(100% - 220px)`,
          ml: `220px`,
          backgroundColor: 'transparent',
          borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)'}`,
          backdropFilter: 'blur(10px)',
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
      >
        <Toolbar sx={{ minHeight: '52px !important', px: 2, justifyContent: 'flex-end', gap: 1.5 }}>
        {/* Dark/Light toggle */}
        <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton
            size="small"
            onClick={toggleMode}
            sx={{ width: 36, height: 36, color: isDark ? '#8892b0' : '#5e6b84', '&:hover': { color: isDark ? '#fff' : '#152238' } }}
          >
            {isDark ? <MoonIcon sx={{ fontSize: 16 }} /> : <SunIcon sx={{ fontSize: 16 }} />}
          </IconButton>
        </Tooltip>

        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton
            size="small"
            sx={{ width: 36, height: 36, color: isDark ? '#8892b0' : '#5e6b84', '&:hover': { color: isDark ? '#fff' : '#152238' } }}
            onClick={(event) => setNotifAnchorEl(event.currentTarget)}
          >
            <Badge badgeContent={4} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16 } }}>
              <NotifIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* User Avatar */}
        <Tooltip title="Profile">
          <IconButton
            size="small"
            onClick={(event) => setProfileAnchorEl(event.currentTarget)}
            sx={{ width: 36, height: 36, p: 0 }}
          >
            <Avatar
              src="/images/avatar.jpg"
              sx={{ width: 30, height: 30, cursor: 'pointer', border: '2px solid #1565FF' }}
            />
          </IconButton>
        </Tooltip>

          <Menu
            anchorEl={notifAnchorEl}
            open={isNotifOpen}
            onClose={() => setNotifAnchorEl(null)}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: 320,
                  backgroundColor: isDark ? '#0d0e28' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(21,34,56,0.12)'}`,
                },
              },
            }}
          >
            {notifications.map((item) => (
              <MenuItem key={item.title} onClick={() => setNotifAnchorEl(null)} sx={{ py: 1.2 }}>
                <ListItemIcon sx={{ minWidth: 34, color: '#4d8aff' }}>
                  <item.icon fontSize="small" />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{item.subtitle}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          <Menu
            anchorEl={profileAnchorEl}
            open={isProfileOpen}
            onClose={() => setProfileAnchorEl(null)}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: 200,
                  backgroundColor: isDark ? '#0d0e28' : '#ffffff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(21,34,56,0.12)'}`,
                },
              },
            }}
          >
            <MenuItem component={Link} href="/dashboard/users/1" onClick={() => setProfileAnchorEl(null)}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem component={Link} href="/dashboard/settings" onClick={() => setProfileAnchorEl(null)}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem component={Link} href="/login" onClick={() => setProfileAnchorEl(null)}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Log out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
