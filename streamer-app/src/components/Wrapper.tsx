import { Stack } from '@mui/material';
import { baseTheme } from '../style/theme';
import { ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Stack
      sx={{
        margin: '30px auto',
        padding: '20px',
        width: {
          md: '70%',
          sm: '80%',
        },
        minHeight: '90vh',
        flexDirection: 'column',
        gap: '50px',
        backgroundColor: baseTheme.palette.primary.main,
        borderRadius: '8px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      {children}
    </Stack>
  );
};

export default Wrapper;
