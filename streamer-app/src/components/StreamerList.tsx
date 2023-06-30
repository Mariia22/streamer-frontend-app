import { useEffect, useState } from "react";
import { socket } from '../utils/socket';
import { StreamerType } from "../types";
import Streamer from "../components/Streamer";
import axios from "axios";
import { baseURLStreamers } from "../utils/const";

const StreamerList = () => {
  const [streamers, setStreamers] = useState<StreamerType[] | null>(null);

  useEffect(() => {
    console.log(baseURLStreamers);
    axios.get(baseURLStreamers).then((response) => {
      setStreamers(response.data);
    });
  }, []);

  useEffect(() => {
    socket.on("new-streamer", ({ newStreamer }) => {
      setStreamers(newStreamer)
    })
    return () => {
      socket.off('new-streamer');
    }
  }, [socket])

  return (
    <>
      {streamers && streamers?.length > 0
        ? (streamers?.map((streamer: StreamerType, key: number) => (<Streamer key={key} {...streamer} />)))
        : (<div>Loading</div>)
      }
    </>
  )
}

export default StreamerList
