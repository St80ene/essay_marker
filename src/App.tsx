import { useState } from 'react';
import EssayResult from './components/EssayResult';
import EssayMarkerForm from './components/EssayMarkerForm';

const App = () => {
  const [result, setResult] = useState(null);

  const handleResult = (data: any) => {
    setResult(data);
  };

  return (
    <div className='w-[70%] m-auto p-3 h-full flex flex-col items-center justify-center'>
      <h2 className='text-white font-bold text-[2rem]'>Essay Marker</h2>
      <EssayMarkerForm onResult={handleResult} />
      {result && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-md shadow-lg'>
            <EssayResult result={result} />
            <button
              onClick={() => setResult(null)}
              className='mt-4 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
      <footer className='mt-8 text-center text-gray-500'>
        <p className='text-white'>
          Powered by{' '}
          <a
            href='https://www.autogon.ai'
            target='_blank'
            className='text-blue-600 hover:underline'
          >
            AutoGon AI
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
