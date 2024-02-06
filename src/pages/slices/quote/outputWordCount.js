const OutputWordCount = ({ wordCount }) => {
  return (
    <div className='mt-3 space-y-2'>
      <label htmlFor='wordcount' className='inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200'>
        Show word count
      </label>
      <output id='wordcount' className='block p-3 text-center text-xl justify-center rounded-lg border-2 border-dashed border-gray-900/25 dark:border-gray-700'>
        {wordCount && <p>{wordCount}</p>}
      </output>
    </div>
  )
}

export default OutputWordCount