import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { apiSelector } from '../state/dummyState';

const APIComponent = () => {
  const { state, contents } = useRecoilValueLoadable(apiSelector);

  console.log(contents);

  return (
    <div className='text-white bg-gray-800 w-full px-5 py-10'>
      {state === 'loading' && 'Fetching user data...'}

      {state === 'hasValue' && (
        <>
          {contents.map((data) => {
            return (
              <div key={data.id} className='mb-8'>
                <p>{data.name}</p>
                <p>{data.phone}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default APIComponent;
