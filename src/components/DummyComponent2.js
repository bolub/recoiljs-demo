import React from 'react';
import { useRecoilState } from 'recoil';
import { dummyAtom } from '../state/dummyState';

const DummyComponent2 = () => {
  const [value, setValue] = useRecoilState(dummyAtom);

  return (
    <div className='text-white bg-red-500 mt-10 w-full px-5 py-10'>
      <input
        type='text'
        placeholder='Enter data here'
        className='border px-5 py-4 w-full border-gray-300 rounded font-medium mb-6 bg-red-900'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <p>Data component 2: {value}</p>
      <p></p>
    </div>
  );
};

export default DummyComponent2;
