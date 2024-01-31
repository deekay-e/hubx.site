const InputWordCount = ({ value, onChange }) => {
  return (
    <div className='mt-3'>
      <label htmlFor='wordcount' className='block text-sm font-medium leading-6'>
        Enter word count
      </label>
      <div className='mt-2'>
        <input
          type='text'
          name='wordcount'
          id='wordcount'
          value={value}
          onChange={onChange}
          className='block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-black dark:ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  )
}

export default InputWordCount