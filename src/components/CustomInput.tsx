import React from 'react';

interface CustomInputProps {
  type: 'text' | 'textarea' | 'number'; // Add other types as needed
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  name: string;
  label?: string; // Optional label for the input field
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  rows,
  required = false,
  label,
  name,
}) => {
  return (
    <div className='mb-4 mt-2'>
      {label && (
        <label
          htmlFor={name}
          className='block text-lg font-medium text-gray-700 mb-1'
        >
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          type={type}
          className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={value as string | number}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default CustomInput;
