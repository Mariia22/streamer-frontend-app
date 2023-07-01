import { useEffect, useState } from "react";
import { socket } from '../utils/socket';
import { StreamerType } from "../types";
import Streamer from "../components/Streamer";
import axios from "axios";
import { baseURLStreamers } from "../utils/const";
import { CircularProgress, Stack } from "@mui/material";

const StreamerList = () => {
  const [streamers, setStreamers] = useState<StreamerType[]>([]);
  useEffect(() => {
    axios.get(baseURLStreamers).then((response) => {
      setStreamers(response.data);
    });
  }, []);

  useEffect(() => {
    socket.on("new-streamer", ({ newStreamer }) => {
      setStreamers((streamers) => [...streamers, newStreamer])
    })

    socket.on("update-streamer", ({ updateStreamer }) => {
      setStreamers((streamers) => [...streamers.map((streamer: StreamerType) => streamer._id === updateStreamer._id ? updateStreamer : streamer)])
    })

    return () => {
      socket.off('new-streamer');
      socket.off("update-streamer");
    }
  }, [socket, setStreamers])

  return (
    <Stack sx={{
      alignItems: 'center',
      flexDirection: "column",
      gap: "20px",
    }}>
      {streamers?.length > 0
        ? (streamers?.map((streamer: StreamerType, key: number) => (<Streamer key={key} {...streamer} />)))
        : (<CircularProgress sx={{ justifyContent: "center" }} />)
      }
    </Stack>
  )
}

export default StreamerList
