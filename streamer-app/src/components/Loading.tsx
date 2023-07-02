import { CircularProgress, Stack } from '@mui/material';
import { ReactNode } from 'react';

type LoadingProps = {
  isLoading: boolean;
  children: ReactNode;
};

const Loading = ({ isLoading, children }: LoadingProps) => {
  if (isLoading)
    return (
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Stack>
    );

  return <>{children}</>;
};

export default Loading;
