'use client';

import React, { useState } from 'react';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, Divider, Collapse, IconButton, Tooltip, useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  CreditCard as CardIcon,
  ContactMail as ECardIcon,
  Contacts as ContactsIcon,
  People as UsersIcon,
  PersonSearch as UserCommandsIcon,
  ExpandLess, ExpandMore,
  Add as AddIcon,
  FormatListBulleted as ListIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BizingLogo from '@/components/BizingLogo';

const DRAWER_WIDTH = 220;

const navSections = [
  {
    label: null,
    items: [
      { label: 'Dashboard', icon: <DashboardIcon fontSize="small" />, href: '/dashboard' },
    ],
  },
  {
    label: 'PERSONAL ASSETS',
    items: [
      {
        label: 'Cards',
        icon: <CardIcon fontSize="small" />,
        href: '/dashboard/cards',
        children: [],
      },
      {
        label: 'eCards',
        icon: <ECardIcon fontSize="small" />,
        href: '/dashboard/ecards',
        children: [
          { label: 'New', icon: <AddIcon sx={{ fontSize: 13 }} />, href: '/dashboard/ecards/new' },
          { label: 'List', icon: <ListIcon sx={{ fontSize: 13 }} />, href: '/dashboard/ecards/list' },
        ],
      },
      {
        label: 'Contacts',
        icon: <ContactsIcon fontSize="small" />,
        href: '/dashboard/contacts',
      },
    ],
  },
  {
    label: 'ADMINISTRATION TOOL',
    items: [
      {
        label: 'Users',
        icon: <UsersIcon fontSize="small" />,
        href: '/dashboard/users',
      },
    ],
  },
  {
    label: 'SELECTED USERS',
    items: [
      {
        label: 'User Commands',
        icon: <UserCommandsIcon fontSize="small" />,
        href: '/dashboard/user-commands',
      },
    ],
  },
];

interface SidebarItemProps {
  item: {
    label: string;
    icon: React.ReactNode;
    href: string;
    children?: { label: string; icon: React.ReactNode; href: string }[];
  };
  depth?: number;
  onNavigate?: () => void;
}

function SidebarItem({ item, depth = 0, onNavigate }: SidebarItemProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const pathname = usePathname();
  const [open, setOpen] = useState(pathname.startsWith(item.href));
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (hasChildren && pathname.startsWith(item.href));

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <>
      <ListItemButton
        component={hasChildren ? 'div' : Link}
        href={hasChildren ? undefined : item.href}
        onClick={handleClick}
        selected={isActive && !hasChildren}
        sx={{
          pl: depth === 0 ? 1.5 : 3,
          py: 0.8,
          mb: 0.2,
          minHeight: 36,
          borderRadius: '6px',
          color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
          '& .MuiListItemText-primary': { color: 'inherit' },
          '&.Mui-selected': {
            bgcolor: '#1565FF',
            color: '#fff',
            '& .MuiListItemIcon-root': { color: '#fff' },
            '& .MuiListItemText-primary': { color: '#fff' },
          },
          '&.Mui-selected:hover': {
            bgcolor: '#1565FF',
            color: '#fff',
            '& .MuiListItemIcon-root': { color: '#fff' },
            '& .MuiListItemText-primary': { color: '#fff' },
          },
          '&:hover': {
            bgcolor: isActive && !hasChildren ? '#1565FF' : 'rgba(21,101,255,0.12)',
            color: isDark ? '#fff' : theme.palette.text.primary,
            '& .MuiListItemText-primary': { color: 'inherit' },
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 28, color: 'inherit' }}>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.label}
          slotProps={{ primary: { sx: { fontSize: 13, fontWeight: isActive ? 600 : 400 } } }}
        />
        {hasChildren && (
          <Box sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
            {open ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
          </Box>
        )}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding sx={{ pl: 1 }}>
            {item.children!.map((child) => (
              <ListItemButton
                key={child.href}
                component={Link}
                href={child.href}
                selected={pathname === child.href}
                onClick={onNavigate}
                sx={{
                  pl: 3,
                  py: 0.6,
                  mb: 0.2,
                  minHeight: 32,
                  borderRadius: '6px',
                  color: pathname === child.href ? '#1565FF' : theme.palette.text.secondary,
                  '& .MuiListItemText-primary': { color: 'inherit' },
                  '&.Mui-selected': { bgcolor: 'transparent', color: '#1565FF' },
                  '&.Mui-selected:hover': { bgcolor: 'transparent', color: '#1565FF' },
                  '&:hover': { bgcolor: 'rgba(21,101,255,0.08)', color: isDark ? '#fff' : theme.palette.text.primary },
                }}
              >
                <ListItemIcon sx={{ minWidth: 24, color: 'inherit' }}>{child.icon}</ListItemIcon>
                <ListItemText
                  primary={child.label}
                  slotProps={{ primary: { sx: { fontSize: 12, fontWeight: pathname === child.href ? 600 : 400 } } }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const paperSx = {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box' as const,
    backgroundColor: isDark ? '#0a0b22' : '#ffffff',
    borderRight: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)'}`,
    overflowX: 'hidden' as const,
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const drawerContent = (
    <>
      {/* Logo */}
      <Box sx={{ px: 2, py: 2.5, display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
        <BizingLogo size="small" />
      </Box>

      <Divider sx={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)', flexShrink: 0 }} />

      {/* Navigation */}
      <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', px: 1, py: 1 }}>
        {navSections.map((section, si) => (
          <Box key={si} sx={{ mb: 1.5 }}>
            {section.label && (
              <Typography
                sx={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: isDark ? '#4a5568' : '#8a94a8',
                  letterSpacing: '0.12em',
                  px: 1.5,
                  py: 0.5,
                  mt: 1,
                }}
              >
                {section.label}
              </Typography>
            )}
            {section.label && (
              <Divider sx={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)', mb: 0.5, mx: 1 }} />
            )}
            <List disablePadding>
              {section.items.map((item) => (
                <SidebarItem key={item.href} item={item} onNavigate={onClose} />
              ))}
            </List>
          </Box>
        ))}
      </Box>

      {/* Settings icon at bottom */}
      <Box
        sx={{
          p: 1.5,
          flexShrink: 0,
          borderTop: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.12)',
        }}
      >
        <Tooltip title="Settings" placement="right">
          <IconButton
            component={Link}
            href="/dashboard/settings"
            size="small"
            onClick={onClose}
            sx={{ color: 'text.secondary', '&:hover': { color: isDark ? '#fff' : 'text.primary' } }}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
    >
      {/* Mobile: temporary drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': paperSx,
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop: permanent drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': paperSx,
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
