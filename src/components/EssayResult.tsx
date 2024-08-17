const EssayResult = ({
  result,
}: {
  result: { data: { [key: string]: any } };
}) => {
  if (!result) {
    return null;
  }

  const {
    data: {
      grammatically_correct_score,
      meaning_score,
      structure_score,
      average_score,
      average_score_w4,
      known_history_score,
    },
  } = result;

  return (
    <div className='w-full p-4 border rounded-md shadow-md bg-white mt-6'>
      <h2 className='text-xl font-semibold mb-4'>Essay Evaluation Result</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Grammatically Correct Score:
          </label>
          <p className='mt-1 text-lg font-medium'>
            {grammatically_correct_score}%
          </p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Meaning Score:
          </label>
          <p className='mt-1 text-lg font-medium'>{meaning_score}%</p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Structure Score:
          </label>
          <p className='mt-1 text-lg font-medium'>{structure_score}%</p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Average Score (Weighted):
          </label>
          <p className='mt-1 text-lg font-medium'>
            {average_score_w4 ? average_score_w4 : average_score}%
          </p>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Known History Score:
          </label>
          <p className='mt-1 text-lg font-medium'>{known_history_score}%</p>
        </div>
      </div>
    </div>
  );
};

export default EssayResult;
