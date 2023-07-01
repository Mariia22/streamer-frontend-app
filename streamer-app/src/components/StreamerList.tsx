import { useEffect, useState } from 'react';
import { socket } from '../utils/socket';
import { StreamerType } from '../types';
import Streamer from '../components/Streamer';
import axios from 'axios';
import { baseURLStreamers } from '../utils/const';
import { Box, CircularProgress, Stack } from '@mui/material';
import { baseTheme } from '../style/theme';

const StreamerList = () => {
  const [streamers, setStreamers] = useState<StreamerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(baseURLStreamers).then((response) => {
      setStreamers(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    socket.on('new-streamer', ({ newStreamer }) => {
      setStreamers((streamers) => [...streamers, newStreamer]);
    });

    socket.on('update-streamer', ({ updateStreamer }) => {
      setStreamers((streamers) => [
        ...streamers.map((streamer: StreamerType) => (streamer._id === updateStreamer._id ? updateStreamer : streamer)),
      ]);
    });

    return () => {
      socket.off('new-streamer');
      socket.off('update-streamer');
    };
  }, [setStreamers]);

  return (
    <Stack
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {streamers?.length > 0 ? (
        streamers?.map((streamer: StreamerType, key: number) => <Streamer key={key} {...streamer} />)
      ) : isLoading ? (
        <CircularProgress sx={{ justifyContent: 'center' }} />
      ) : (
        <Box
          sx={{
            width: 'calc(100% - 48px)',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: baseTheme.palette.primary.light,
            borderRadius: '8px',
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
          }}
        >
          No streamers on the list
        </Box>
      )}
    </Stack>
  );
};

export default StreamerList;
