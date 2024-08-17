import React, { useState } from 'react';

const EssayDescriptionInput = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [criteria, setCriteria] = useState(['']);

  const handleCriteriaChange = (index, value) => {
    const newCriteria = [...criteria];
    newCriteria[index] = value;
    setCriteria(newCriteria);
  };

  const addCriteriaField = () => {
    setCriteria([...criteria, '']);
  };

  const handleSubmit = () => {
    onSave({ title, instructions, dueDate, wordCount, criteria });
  };

  return (
    <div className='w-full m-auto h-auto p-4 bg-white mt-5 border rounded-md shadow-md'>
      <h2 className='font-semibold mb-4'>Essay Description</h2>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-1 p-2 border rounded-md w-full'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          Instructions
        </label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className='mt-1 p-2 border rounded-md w-full'
        />
      </div>
      <div className='mb-4 flex justify-between'>
        <div className='w-1/2 mr-2'>
          <label className='block text-sm font-medium text-gray-700'>
            Due Date
          </label>
          <input
            type='date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className='mt-1 p-2 border rounded-md w-full'
          />
        </div>
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          Marking Criteria
        </label>
        {criteria.map((criterion, index) => (
          <input
            key={index}
            type='text'
            value={criterion}
            onChange={(e) => handleCriteriaChange(index, e.target.value)}
            className='mt-1 p-2 border rounded-md w-full mb-2'
          />
        ))}
        <button
          type='button'
          onClick={addCriteriaField}
          className='text-blue-500 text-sm mt-2'
        >
          + Add Criteria
        </button>
      </div>
      <button
        type='button'
        onClick={handleSubmit}
        className='bg-blue-500 text-white py-2 px-4 rounded-md'
      >
        Save Description
      </button>
    </div>
  );
};

export default EssayDescriptionInput;
