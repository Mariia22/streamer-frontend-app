import axios from 'axios';
import { baseURLStreamers } from '../utils/const';
import { IconButton } from '@mui/material';
import IconBxsDownArrowSquare from './IconDownArrow';
import IconBxsUpArrowSquare from './IconUpArrow';

type ChangeButtonVoteProps = {
  id: string;
  name: 'add' | 'subtract';
};

const ChangeButtonVote = ({ name, id }: ChangeButtonVoteProps) => {
  const isVoteUp = name === 'add' ? true : false;

  function changeVote() {
    let requestParameter: number | undefined;
    isVoteUp ? (requestParameter = 1) : (requestParameter = -1);
    axios.put(`${baseURLStreamers}/${id}/vote`, {
      vote: requestParameter,
    });
  }

  return (
    <IconButton onClick={() => changeVote()} aria-label="change vote" sx={{ padding: '0px' }}>
      {isVoteUp ? <IconBxsUpArrowSquare /> : <IconBxsDownArrowSquare />}
    </IconButton>
  );
};

export default ChangeButtonVote;
