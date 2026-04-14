'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

interface BizingLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  showSubtitle?: boolean;
}

export default function BizingLogo({ size = 'medium', showText = true, showSubtitle = false }: BizingLogoProps) {
  const sizes = {
    small: { icon: 28, text: 14, sub: 8 },
    medium: { icon: 36, text: 18, sub: 10 },
    large: { icon: 72, text: 28, sub: 12 },
  };
  const s = sizes[size];

  return (
    <Link href="/dashboard" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
        {/* SVG Logo Icon */}
        <Box
          sx={{
            width: s.icon,
            height: s.icon,
            borderRadius: '50%',
            border: `2px solid #1565FF`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: 'transparent',
          }}
        >
          <svg width={s.icon * 0.55} height={s.icon * 0.55} viewBox="0 0 24 24" fill="none">
            <text x="4" y="19" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#1565FF">B</text>
          </svg>
        </Box>
        {showText && (
          <Box>
            <Typography
              sx={{
                fontSize: s.text,
                fontWeight: 700,
                color: '#1565FF',
                lineHeight: 1,
                letterSpacing: '0.05em',
              }}
            >
              Bizing
            </Typography>
            {showSubtitle && (
              <Typography
                sx={{
                  fontSize: s.sub,
                  fontWeight: 600,
                  color: '#1565FF',
                  letterSpacing: '0.15em',
                  lineHeight: 1,
                  mt: 0.3,
                }}
              >
                BUSINESS ATTITUDE
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Link>
  );
}
