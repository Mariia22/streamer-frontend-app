import axios from 'axios';
import { baseURLStreamers } from '../utils/const';
import { IconButton } from '@mui/material';
import IconBxsDownArrowSquare from './IconDownArrow';
import IconBxsUpArrowSquare from './IconUpArrow';
import { useState } from 'react';

type ChangeButtonVoteProps = {
  id: string;
  name: 'add' | 'subtract';
};

const ChangeButtonVote = ({ name, id }: ChangeButtonVoteProps) => {
  const isVoteUp = name === 'add' ? true : false;
  const [isLoading, setIsLoading] = useState(false);

  function changeVote() {
    setIsLoading(true);
    let requestParameter: number | undefined;
    isVoteUp ? (requestParameter = 1) : (requestParameter = -1);
    axios
      .put(`${baseURLStreamers}/${id}/vote`, {
        vote: requestParameter,
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <IconButton onClick={() => changeVote()} aria-label="change vote" sx={{ padding: '0px' }} disabled={isLoading}>
      {isVoteUp ? <IconBxsUpArrowSquare /> : <IconBxsDownArrowSquare />}
    </IconButton>
  );
};

export default ChangeButtonVote;
