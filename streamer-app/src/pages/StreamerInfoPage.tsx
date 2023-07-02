import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { baseTheme } from '../style/theme';
import { useEffect, useState } from 'react';
import { getStreamerById } from '../utils/const';
import { StreamerType } from '../types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const StreamerInfoPage = () => {
  const [streamer, setStreamer] = useState<StreamerType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${getStreamerById}/${id}`)
      .then((response) => {
        setStreamer(response.data);
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <Loading isLoading={isLoading}>
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
        <Typography variant="h2" sx={{ alignContent: 'flex-start' }}>
          Streamer's info
        </Typography>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {streamer ? (
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia component="img" height="300" image={streamer?.avatarUrl} alt={streamer?.name} />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {streamer?.name}
                </Typography>
                <Typography variant="h4" sx={{ color: `${baseTheme.palette.primary.contrastText}` }}>
                  {streamer?.platform}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {streamer?.description}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Typography>The streamer is not found</Typography>
          )}
        </Stack>
      </Stack>
    </Loading>
  );
};

export default StreamerInfoPage;
