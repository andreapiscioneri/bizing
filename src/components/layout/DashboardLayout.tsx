'use client';

import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DRAWER_WIDTH = 220;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <TopBar onMobileMenuOpen={() => setMobileOpen(true)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar sx={{ minHeight: '52px !important' }} />
        <Box sx={{ flex: 1, p: { xs: 2, sm: 3 }, overflow: 'auto' }}>
          {children}
        </Box>
        {/* Footer */}
        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'divider',
            px: { xs: 2, sm: 3 },
            py: 1.5,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            gap: { xs: 2, sm: 3 },
            flexWrap: 'wrap',
          }}
        >
          {['License', 'More Themes', 'Documentation', 'Support'].map((item) => (
            <Box
              key={item}
              component="a"
              href="#"
              sx={{ fontSize: 11, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
