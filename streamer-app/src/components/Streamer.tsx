import { StreamerType } from '../types'

const Streamer = (streamer: StreamerType) => {
  return (
    <div>{streamer.name}</div>
  )
}

export default Streamer
