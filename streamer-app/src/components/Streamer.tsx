import { NavLink } from 'react-router-dom';
import { StreamerType } from '../types';
import ChangeButtonVote from './ChangeButtonVote';
import { Box, Stack, Typography } from '@mui/material';
import { baseTheme } from '../style/theme';

const Streamer = (streamer: StreamerType) => {
  return (
    <Stack
      sx={{
        width: 'calc(100% - 48px)',
        flexDirection: 'row',
        gap: '15px',
        padding: '10px',
        backgroundColor: baseTheme.palette.primary.light,
        borderRadius: '8px',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04)',
      }}
    >
      <Stack
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '20px',
          borderRight: `1px solid ${baseTheme.palette.primary.main}`,
        }}
      >
        <ChangeButtonVote name="add" id={streamer._id} />
        <Typography component="span">{streamer.vote}</Typography>
        <ChangeButtonVote name="subtract" id={streamer._id} />
      </Stack>
      <NavLink
        to={`streamer/${streamer._id}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          textDecoration: 'none',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>{streamer.name}</Typography>
          <Typography>{streamer.platform}</Typography>
        </Box>
        <Typography>{streamer.description}</Typography>
      </NavLink>
    </Stack>
  );
};

export default Streamer;
