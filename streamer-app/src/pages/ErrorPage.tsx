import { Typography } from '@mui/material';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

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
    <Wrapper>
      <Typography variant="h2">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{errorMessage}</i>
      </Typography>
    </Wrapper>
  );
}
