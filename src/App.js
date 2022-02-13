import './App.css';
import APIComponent from './components/APIComponent';
import DummyComponent from './components/DummyComponent';

function App() {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='w-96 m-auto'>
        {/* TITLE */}
        <h1 className='text-4xl font-semibold mb-10'>RecoilJS demo</h1>

        {/* INPUT */}
        <input
          type='text'
          placeholder='Enter data here'
          className='border px-5 py-4 w-full border-gray-300 rounded font-medium mb-6'
        />

        {/* DUMMY COMPONENT */}
        <DummyComponent />
        {/* <APIComponent /> */}
      </div>
    </div>
  );
}

export default App;
