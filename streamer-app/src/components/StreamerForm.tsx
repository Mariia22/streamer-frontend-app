import axios from 'axios';
import { FormEvent, useState } from 'react';
import { baseURLStreamers } from '../utils/const';

const StreamerForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: FormEvent) {
    setIsLoading(true)
    event.preventDefault();
    axios.post(baseURLStreamers, {
      name: "Mary",
      platform: "Tik Tok",
      description: "ckdncjkn"
    })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}

export default StreamerForm
