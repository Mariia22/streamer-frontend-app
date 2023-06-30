import { StreamerType } from '../types'
import ChangeButtonVote from './ChangeButtonVote'
import Vote from './Vote'

const Streamer = (streamer: StreamerType) => {
  return (
    <div>
      {streamer.name}
      <ChangeButtonVote name='add' id={streamer._id} />
      <Vote vote={streamer.vote} />
      <ChangeButtonVote name='subtract' id={streamer._id} />
    </div>
  )
}

export default Streamer
