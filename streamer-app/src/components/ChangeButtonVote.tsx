import axios from 'axios';
import { baseURLStreamers } from '../utils/const';

type ChangeButtonVoteProps = {
  id: string,
  name: 'add' | 'subtract'
}

const ChangeButtonVote = ({ name, id }: ChangeButtonVoteProps) => {
  const buttonName = name[0].toUpperCase() + name.slice(1);

  function changeVote(action: typeof name) {
    let requestParameter: number | undefined;
    action === 'add' ? requestParameter = 1 : requestParameter = -1;
    axios.put(`${baseURLStreamers}/${id}/vote`, {
      vote: requestParameter
    })
  }

  return (
    <button onClick={() => changeVote(name)}>{buttonName}</button>
  )
}

export default ChangeButtonVote
