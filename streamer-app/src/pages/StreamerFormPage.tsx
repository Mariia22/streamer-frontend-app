import { Stack, Typography } from '@mui/material';
import StreamerForm from '../components/StreamerForm';
import StreamerList from '../components/StreamerList';
import { baseTheme } from '../style/theme';

const StreamerFormPage = () => {
  return (
    <Stack
      sx={{
        margin: '30px auto',
        padding: '20px',
        width: '70%',
        minHeight: '90vh',
        flexDirection: 'column',
        gap: '15px',
        backgroundColor: baseTheme.palette.primary.main,
        borderRadius: '8px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      <Typography variant="h1" sx={{ alignContent: 'flex-start' }}>
        Streamers.com
      </Typography>
      <StreamerForm />
      <StreamerList />
    </Stack>
  );
};

export default StreamerFormPage;
