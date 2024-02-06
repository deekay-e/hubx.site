import mammoth from 'mammoth'
import { Fragment, useState } from 'react'
import ProjectFile from './quote/projectFile'
import InputWordCount from './quote/inputWordCount'
import OutputWordCount from './quote/outputWordCount'
import ProjectDuration from './quote/projectDuration'
import { Listbox, Transition } from '@headlessui/react'
import { version, getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { BookHalf, Clipboard2Data, Clock, Code, HouseExclamation, Pencil, Projector, TelephoneOutbound, Tools, Translate } from 'react-bootstrap-icons'
import ShowQuote from './quote/showQuote'
import SelectCountType from './quote/selectCountType'

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`

const services = [
  { id: 1, name: 'Proofreading and editing', icon: BookHalf, charge: 2 },
  { id: 2, name: 'CV or Cover letter reviews', icon: Clipboard2Data, charge: 3 },
  { id: 3, name: 'Personal statement writing', icon: Pencil, charge: 5 },
  { id: 4, name: 'Poster or Presentation', icon: Projector, charge: 50 },
  { id: 5, name: 'Mentorship', icon: TelephoneOutbound, charge: 10000 },
  { id: 6, name: 'Accommodation', icon: HouseExclamation, charge: 1 },
  { id: 7, name: 'Hourly consultation', icon: Clock, charge: 100 },
  { id: 8, name: 'Translation', icon: Translate, charge: 4 },
  { id: 9, name: 'Programming', icon: Code, charge: 25 },
  { id: 10, name: 'Design', icon: Tools, charge: 15}
]
let duration = ['hour', 'day', 'week', 'month']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const getTextFromPDF = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      try {
        const typedArray = new Uint8Array(fileReader.result)
        const pdf = await getDocument(typedArray).promise
        let extractedText = ''

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          const textItems = content.items.map((item) => item.str) 
          extractedText += textItems.join(' ')
        }
        resolve(extractedText)
      } catch (err) {
        reject(err)
      }
    }
    fileReader.readAsArrayBuffer(file)
  })
}

const getTextFromDOCX = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = async () => {
      try {
        const arrayBuffer = fileReader.result
        const result = await mammoth.extractRawText({ arrayBuffer })
        const extractedText = result.value.replace(/\n/g, ' ').trim()

        resolve(extractedText)
      } catch(err) {
        reject(err)
      }
    }
    fileReader.readAsArrayBuffer(file)
  })
}

const getTextFromTXT = async (file) => {
  const fileReader = new FileReader()

  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      const extractedText = fileReader.result

      resolve(extractedText)
    }
    fileReader.onerror = reject

    fileReader.readAsText(file)
  })
}

const InstantQuote = () => {
  const [time, setTime] = useState(0)
  const [quote, setQuote] = useState(0)
  const [cat, setCat] = useState(services[7])
  const [filename, setFilename] = useState('')
  const [unit, setUnit] = useState(duration[0])
  const [wordCount, setWordCount] = useState(0)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [countMode, setCountMode] = useState(false)

  const timeDelta = (t) => {
    let nt = 0
    let u = unit

    // convert hours to days, weeks and months
    if (t > 24 && u === duration[0]) {
      nt = ~~(t / 24)
      u = duration[1]
    } else if (t > 7 && u === duration[1]) {
      nt = ~~(t / 7)
      u = duration[2]
    } else if (t > 4 && u === duration[2]) {
      nt = ~~(t / 4)
      u = duration[3]
    }

    setTime(nt)
    setUnit(u)
  }
  const handleSetTime = (e) => {
    let u = unit
    let t = Number(e)
    setTime(t)

    // add 's' for plural to time
    if (time === 0 && u.includes('s')) {
      duration.map(item => item.replace('s', ''))
      u = u.replace('s', '')
      setUnit(u)
    } else if (time > 0 && u[u.length-1] !== 's') {
      duration.map(item => item.concat('s'))
      u = u.concat('s')
      timeDelta(time)
    }
  }

  const changeWordCount = (e) => {
    let c = parseInt(e.target.value)
    if (!c || typeof c !== 'number') {
      setWordCount(0)
    } else {
      setWordCount(c)
    }
  }

  const closeQuote = () => {
    setQuoteOpen(false)
    setQuote(0)
  }

  const openQuote = () => {
    setQuoteOpen(true)
  }

  const countWords = (text) => {
    let count = 1
    let words = text.replace(/\n|\s+|\t|\r/g, ' ')

    for (let i = 0; i < words.length; i++) {
      if (words[i-1] !== ' ' && words[i] === ' ' && words[i+1] !== ' ') {
        count++
      }
    }
    return count
  }

  const getWordCount = async (e) => {
    const file = e.target.files[0]

    if(file) {
      try {
        let text = ''
        let count = 0

        if (file.type === 'application/pdf') {
          text = await getTextFromPDF(file)
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          text = await getTextFromDOCX(file)
        } else if (file.type === 'text/plain') {
          text = await getTextFromTXT(file)
        } else {
          throw new Error('Unsupported file format')
        }

        count = countWords(text)
        setWordCount(count)
        setFilename(file.name)
      } catch(err) {
        console.error(err)
        setWordCount(0)
      }
    }
  }

  const getInstantQuote = (e) => {
    e.preventDefault()
    // init quote form variables
    let q = quote
    const qc = cat
    const qt = time
    //const qu = unit
    const count = wordCount
    
    // perform calc to get quote
    if (qt > 0 || !qt) {
      if (qc.id === 1 || qc.id === 2 || qc.id === 3 || qc.id === 8) {
        q = qc.charge * count
      } else if (qc.id === 7) {
        q = qc.charge
      }
    }
    //fquote = count * ftime

    setQuote(q.toFixed(2))

    // open quote modal and reset form
    setQuoteOpen(true)
    setWordCount(0)
    setFilename('')
    setTime(0)
  }

  const content = (
    <div>
      <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white'>Get an instant <span className='text-blue-600'>quotation</span></h1>
      <p className='mt-3 text-lg text-gray-800 dark:text-gray-400'>Hand-picked professionals and expertly crafted solutions, designed for any kind of student or professional.</p>
      
      <form onSubmit={getInstantQuote}>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <Listbox value={cat} onChange={setCat}>
              {({ open }) => (
                <>
                  <Listbox.Label htmlFor='category' className='block text-sm font-medium leading-6'>Type of service needed</Listbox.Label>
                  <div className='block relative mt-2'>
                    <Listbox.Button id='category' className='block relative w-full cursor-default rounded-md bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
                      <span className='flex items-center'>
                        <cat.icon />
                        <span className='ml-3 block truncate'>{cat.name}</span>
                      </span>
                      <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                        <ChevronUpDownIcon className='h-5 w-5 text-gray-500' aria-hidden='true' />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none sm:text-sm'>
                        {services.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-blue-600 text-white dark:text-black' : '',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={item}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className='flex items-center'>
                                  <item.icon />
                                  <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {item.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white dark:text-black' : 'text-blue-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className='h-5 w-5' aria-hidden='true' />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          
          {(cat.id !== 7 )
            && <ProjectDuration unit={unit} duration={duration} setUnit={setUnit} setTime={handleSetTime} time={time} />}
        </div>

        {/* Enter wordcount manually? */}
        {(cat.id !== 4 && cat.id !== 5 && cat.id !== 6 && cat.id !== 7 && cat.id !== 9 && cat.id !== 10)
          && <SelectCountType enabled={countMode} setEnabled={setCountMode} />}

        {(cat.id !== 4 && cat.id !== 5 && cat.id !== 6 && cat.id !== 7 && cat.id !== 9 && cat.id !== 10
          && !countMode) 
          && <ProjectFile getWordCount={getWordCount} filename={filename} />}

        {(cat.id !== 4 && cat.id !== 5 && cat.id !== 6 && cat.id !== 7 && cat.id !== 9 && cat.id !== 10
          && !filename && countMode) 
          && <InputWordCount value={wordCount} onChange={changeWordCount} />}

        {filename && <OutputWordCount wordCount={wordCount} />}

        <div className='mt-3 grid'>
          <button onClick={openQuote} type='submit' className='block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>Get instant quote</button>
        </div>
        <ShowQuote close={closeQuote} quote={quote} quoteOpen={quoteOpen} cat={cat.name} />
      </form>
    </div>
  )
  return content
}

export default InstantQuote