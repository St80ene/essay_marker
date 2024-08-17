import { useState } from 'react';

const { VITE_AUTOGON_API_KEY } = import.meta.env;

const EssayMarkerForm = ({ onResult }: { onResult: any }) => {
  const [question, setQuestion] = useState('');
  const [essay, setEssay] = useState('');
  const [answer, setAnswer] = useState('');
  const [requiredWords, setRequiredWords] = useState('');

  const sampleData = {
    question: 'What are the benefits of exercise for mental health?',
    essay:
      "Exercise has numerous benefits for mental health. It helps reduce symptoms of depression and anxiety, improves mood, and boosts self-esteem. Regular physical activity increases the production of endorphins, which are known as 'feel-good' hormones. It also helps improve sleep patterns, which is crucial for mental well-being. Additionally, exercise can serve as a healthy coping mechanism for stress, providing a distraction and promoting relaxation. Overall, incorporating exercise into one’s routine can lead to significant improvements in mental health and overall quality of life.",
    answer:
      'Regular exercise can have a profoundly positive impact on mental health. It relieves stress, improves memory, helps you sleep better, and boosts overall mood. Exercise also has anti-anxiety effects and can alleviate symptoms of depression.',
    required_number_of_words: 100,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      question,
      essay,
      answer: answer || null, // Optional field
      required_number_of_words: parseInt(requiredWords, 10),
    };

    const response = await fetch(
      'https://api.autogon.ai/api/v1/services/essay-marker/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-AUG-KEY': VITE_AUTOGON_API_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    console.log('result', result);

    onResult(result);
  };

  return (
    <form
      className='w-full m-auto h-auto p-4 bg-white mt-5 border rounded-md shadow-md'
      onSubmit={handleSubmit}
    >
      <div>
        <label className='block text-lg font-medium text-gray-700'>
          Essay Question:
        </label>
        <textarea
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={6}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='block text-lg font-medium text-gray-700'>
          Candidate's Essay:
        </label>
        <textarea
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={6}
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='block text-lg font-medium text-gray-700'>
          Reference Answer (Optional):
        </label>
        <textarea
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div>
        <label className='block text-lg font-medium text-gray-700'>
          Required Number of Words:
        </label>
        <input
          type='number'
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={requiredWords}
          onChange={(e) => setRequiredWords(e.target.value)}
          required
        />
      </div>
      <button
        type='submit'
        className='px-4 mt-3 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'
      >
        Mark Essay
      </button>
    </form>
  );
};

export default EssayMarkerForm;
