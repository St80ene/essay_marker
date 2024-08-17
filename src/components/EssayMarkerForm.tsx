import { useState } from 'react';
import CustomInput from './CustomInput';

const { VITE_AUTOGON_API_KEY } = import.meta.env;

interface IState {
  question: string;
  essay: string;
  answer: string;
  requiredWordCount: string;
}

const initialState = {
  question: '',
  essay: '',
  answer: '',
  requiredWordCount: '',
};

const EssayMarkerForm = ({ onResult }: { onResult: any }) => {
  const [{ question, essay, answer, requiredWordCount }, setState] =
    useState<IState>(initialState);

  // const sampleData = {
  //   question: 'What are the benefits of exercise for mental health?',
  //   essay:
  //     "Exercise has numerous benefits for mental health. It helps reduce symptoms of depression and anxiety, improves mood, and boosts self-esteem. Regular physical activity increases the production of endorphins, which are known as 'feel-good' hormones. It also helps improve sleep patterns, which is crucial for mental well-being. Additionally, exercise can serve as a healthy coping mechanism for stress, providing a distraction and promoting relaxation. Overall, incorporating exercise into one’s routine can lead to significant improvements in mental health and overall quality of life.",
  //   answer:
  //     'Regular exercise can have a profoundly positive impact on mental health. It relieves stress, improves memory, helps you sleep better, and boosts overall mood. Exercise also has anti-anxiety effects and can alleviate symptoms of depression.',
  //   required_number_of_words: 100,
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      question,
      essay,
      answer: answer || null, // Optional field
      required_number_of_words: parseInt(requiredWordCount, 10),
    };

    console.log({ VITE_AUTOGON_API_KEY });

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
    setState(initialState);

    onResult(result);
    form.reset();
  };

  return (
    <form
      className='w-full m-auto h-auto p-4 bg-white mt-5 border rounded-md shadow-md'
      onSubmit={handleSubmit}
    >
      <CustomInput
        type='textarea'
        name='question'
        value={question}
        onChange={(e) =>
          setState((prev) => ({ ...prev, question: e.target.value }))
        }
        placeholder='Enter the essay question'
        rows={6}
        label='Essay Question'
        required
      />
      <CustomInput
        type='textarea'
        name='answer'
        rows={6}
        value={answer}
        onChange={(e) =>
          setState((prev) => ({ ...prev, answer: e.target.value }))
        }
        placeholder='Reference Answer (Optional):'
        label='Reference Answer (Optional):'
        required={false}
      />
      <CustomInput
        type='number'
        name='requiredWordCount'
        value={requiredWordCount}
        onChange={(e) =>
          setState((prev) => ({ ...prev, requiredWordCount: e.target.value }))
        }
        placeholder=' Required Number of Words'
        label='Required Number of Words:'
        required
      />
      <CustomInput
        type='textarea'
        name='essay'
        value={essay}
        onChange={(e) =>
          setState((prev) => ({ ...prev, essay: e.target.value }))
        }
        placeholder='Essay of Candidate'
        rows={6}
        label='Essay of Candidate'
        required
      />
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
