import React, { useState } from 'react';
import { isFunction } from '../utils';

export default function useTable<T>(api: () => Promise<T>, params: {}) {
  const [p, setP] = useState(isFunction(params) ? params() : params);
}
