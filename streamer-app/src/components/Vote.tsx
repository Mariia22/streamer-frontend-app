import { useEffect, useState } from "react"
import { socket } from "../utils/socket"

type VoteProps = {
  vote: number
}

const Vote = ({ vote}: VoteProps) => {
  const [numberOfVotes, setNumberOfVotes] = useState<number>(vote);

  useEffect(() => {
    socket.on("update-streamer", ({ updateStreamer }) => {
      setNumberOfVotes(updateStreamer.vote)
    })

    return () => {
      socket.off("update-streamer");
    }
  }, [socket, setNumberOfVotes])


  return (
    <div>{numberOfVotes}</div>
  )
}

export default Vote
