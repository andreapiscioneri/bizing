'use client';

import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DRAWER_WIDTH = 220;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#07081a' }}>
      <Sidebar />
      <TopBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar sx={{ minHeight: '52px !important' }} />
        <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
          {children}
        </Box>
        {/* Footer */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            px: 3,
            py: 1.5,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 3,
          }}
        >
          {['License', 'More Themes', 'Documentation', 'Support'].map((item) => (
            <Box
              key={item}
              component="a"
              href="#"
              sx={{ fontSize: 11, color: '#8892b0', '&:hover': { color: '#fff' } }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
