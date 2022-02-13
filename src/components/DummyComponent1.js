import React from 'react';

import { useRecoilValue } from 'recoil';
import { dummyAtom } from '../state/dummyState';

const DummyComponent1 = () => {
  const valueInsideComponent = useRecoilValue(dummyAtom);

  return (
    <div className='text-white bg-gray-800 w-full px-5 py-10'>
      <p>Dummy Component 1: {valueInsideComponent}</p>
      <p></p>
    </div>
  );
};

export default DummyComponent1;
