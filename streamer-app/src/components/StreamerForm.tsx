import { useState } from 'react'

const StreamerForm = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setIsLoading(true);
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={e => setValue(e.target.value)} />
      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}

export default StreamerForm
