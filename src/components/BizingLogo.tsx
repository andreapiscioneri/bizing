'use client';

import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

interface BizingLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  showSubtitle?: boolean;
}

export default function BizingLogo({ size = 'medium', showText = true, showSubtitle = false }: BizingLogoProps) {
  const sizes = {
    small: { height: 20 },
    medium: { height: 42 },
    large: { height: 120 },
  };
  const s = sizes[size];

  const logoSrc = showSubtitle
    ? '/images/logo-stacked.png'
    : '/images/logo-horizontal.png';

  const logoAlt = showSubtitle ? 'Bizing logo completo' : 'Bizing logo';

  return (
    <Link href="/dashboard" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Box
          component="img"
          src={showText ? logoSrc : '/images/logo-stacked.png'}
          alt={logoAlt}
          sx={{
            height: s.height,
            width: 'auto',
            maxWidth: size === 'small' ? 80 : size === 'medium' ? 170 : 240,
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Box>
    </Link>
  );
}
