import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import APIComponent from './components/APIComponent';
import DummyComponent from './components/DummyComponent1';
import DummyComponent2 from './components/DummyComponent2';
import { dummyAtom, dummySelector } from './state/dummyState';

function App() {
  const [value, setValue] = useRecoilState(dummyAtom);

  return (
    <div className='flex flex-col min-h-screen w-full py-20'>
      <div className='w-96 m-auto'>
        <h1 className='text-4xl font-semibold mb-10'>RecoilJS demo</h1>

        <input
          type='text'
          placeholder='Enter data here'
          className='border px-5 py-4 w-full border-gray-300 rounded font-medium mb-6'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />

        {/* <DummyComponent />
        <DummyComponent2 /> */}
        <APIComponent />
      </div>
    </div>
  );
}

export default App;
