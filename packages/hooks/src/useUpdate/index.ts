import { useState } from 'react';

export default function () {
  const [, setState] = useState({});
  const update = () => {
    setState({});
  };
  return update;
}
