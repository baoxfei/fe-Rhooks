import { useEffect } from 'react';

import createAsyncEffect from '../createAsyncEffect';

const useAsyncEffect = createAsyncEffect(useEffect);

export default useAsyncEffect;
