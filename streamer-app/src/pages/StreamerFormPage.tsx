import { Typography } from '@mui/material';
import StreamerForm from '../components/StreamerForm';
import StreamerList from '../components/StreamerList';
import Wrapper from '../components/Wrapper';

const StreamerFormPage = () => {
  return (
    <Wrapper>
      <Typography variant="h1" sx={{ alignContent: 'flex-start' }}>
        Streamers.com
      </Typography>
      <StreamerForm />
      <StreamerList />
    </Wrapper>
  );
};

export default StreamerFormPage;
