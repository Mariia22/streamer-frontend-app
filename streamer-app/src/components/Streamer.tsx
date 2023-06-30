import { NavLink } from 'react-router-dom'
import { StreamerType } from '../types'
import ChangeButtonVote from './ChangeButtonVote'
import Vote from './Vote'

const Streamer = (streamer: StreamerType) => {
  return (
    <NavLink to={`streamer/${streamer._id}`}>
      {streamer.name}
      <ChangeButtonVote name='add' id={streamer._id} />
      <Vote vote={streamer.vote} />
      <ChangeButtonVote name='subtract' id={streamer._id} />
    </NavLink>
  )
}

export default Streamer
