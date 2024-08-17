import { useState } from 'react';
import EssayResult from './components/EssayResult';
import EssayMarkerForm from './components/EssayMarkerForm';

const App = () => {
  const [result, setResult] = useState(null);

  const handleResult = (data: any) => {
    setResult(data);
  };

  return (
    <div className='w-[70%] text-white m-auto p-3 h-full flex flex-col items-center justify-center'>
      <h2 className='text-white font-bold text-[2rem]'>Essay Marker</h2>
      <EssayMarkerForm onResult={handleResult} />
      {result && <EssayResult result={result} />}
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
