'use client';

import { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Button, Chip, Divider,
  TextField, List, ListItem, ListItemText, ListItemIcon,
  Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CheckCircle as CheckIcon } from '@mui/icons-material';

const packs = [
  {
    id: 'pack1',
    name: 'Starter',
    price: '€9.99',
    period: '/month',
    description: 'Perfect for individuals getting started',
    features: ['1 Metal Card', '5 eCards', '100 Contacts', 'Basic Analytics', 'Email Support'],
    color: '#4d8aff',
    popular: false,
  },
  {
    id: 'pack2',
    name: 'Business',
    price: '€29.99',
    period: '/month',
    description: 'Best for growing businesses',
    features: ['3 Metal Cards', '25 eCards', 'Unlimited Contacts', 'Advanced Analytics', 'Priority Support', 'Team Features'],
    color: '#1565FF',
    popular: true,
  },
  {
    id: 'pack3',
    name: 'Enterprise',
    price: '€99.99',
    period: '/month',
    description: 'For large organizations',
    features: ['10 Metal Cards', 'Unlimited eCards', 'Unlimited Contacts', 'Custom Analytics', '24/7 Support', 'API Access', 'White Label'],
    color: '#00cfff',
    popular: false,
  },
];

export default function PaymentPage() {
  const [selected, setSelected] = useState('pack2');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const titleColor = isDark ? '#ffffff' : '#152238';
  const subtitleColor = isDark ? '#8892b0' : '#5e6b84';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(21,34,56,0.03)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(21,34,56,0.16)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(21,34,56,0.08)';

  return (
    <Box>
      <Typography variant="h5"
              sx={{ fontWeight: 600, mb: 0.5, color: titleColor }}>
        Choose your Plan
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: subtitleColor }}>
        Select the plan that fits your needs
      </Typography>

      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        {packs.map((pack) => (
          <Grid size={{ xs: 12, md: 4 }} key={pack.id}>
            <Card
              onClick={() => setSelected(pack.id)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                border: selected === pack.id ? `2px solid ${pack.color}` : `1px solid ${cardBorder}`,
                transition: 'all 0.2s',
                '&:hover': { borderColor: pack.color, transform: 'translateY(-4px)' },
              }}
            >
              {pack.popular && (
                <Chip
                  label="Most Popular"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: '#1565FF',
                    color: theme.palette.getContrastText('#1565FF'),
                    fontSize: 10,
                    height: 20,
                  }}
                />
              )}
              <CardContent sx={{ textAlign: 'center', pt: 3 }}>
                <Typography variant="h6" sx={{color: pack.color, fontWeight: 700, mb: 0.5}}>
                  {pack.name}
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mb: 2, color: subtitleColor }}>
                  {pack.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography component="span" variant="h4" sx={{ color: titleColor }}>{pack.price}</Typography>
                  <Typography component="span" variant="body2" sx={{ color: subtitleColor }}>{pack.period}</Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <List dense disablePadding>
                  {pack.features.map((f) => (
                    <ListItem key={f} disableGutters sx={{ py: 0.3 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <CheckIcon sx={{ fontSize: 14, color: pack.color }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={f}
                        slotProps={{ primary: { sx: { fontSize: 12, color: titleColor } } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Payment Details */}
      <Card sx={{ maxWidth: 500, width: '100%' }}>
        <CardContent>
          <Typography variant="subtitle1"
              sx={{ fontWeight: 600, mb: 2, color: titleColor }}>
            Payment Details
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth placeholder="Card Number" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField fullWidth placeholder="MM/YY" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField fullWidth placeholder="CVC" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth placeholder="Name on Card" size="small" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: inputBg, '& fieldset': { borderColor: inputBorder } } }} />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="medium"
            sx={{ mt: 3, py: 1 }}
          >
            COMPLETE PAYMENT
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
