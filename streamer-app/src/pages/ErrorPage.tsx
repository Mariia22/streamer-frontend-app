import { Stack, Typography } from '@mui/material';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { baseTheme } from '../style/theme';

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <Stack
      sx={{
        margin: '30px auto',
        padding: '20px',
        width: '70%',
        minHeight: '90vh',
        flexDirection: 'column',
        gap: '50px',
        backgroundColor: baseTheme.palette.primary.main,
        borderRadius: '8px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      <Typography variant="h2">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{errorMessage}</i>
      </Typography>
    </Stack>
  );
}
