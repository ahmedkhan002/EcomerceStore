import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const CustomSeparator = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className='max-md:hidden'>
      {pathnames != '' &&
        <Stack spacing={2} className='my-4'>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" component={RouterLink} to="/">
              Home
            </Link>

            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return isLast ? (
                <Typography key={to} color="text.primary">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Typography>
              ) : (
                <Link
                  key={to}
                  underline="hover"
                  color="inherit"
                  component={RouterLink}
                  to={to}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Stack>
      }
    </div>
  );
};

export default CustomSeparator;
