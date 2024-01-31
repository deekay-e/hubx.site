import React, { useState, useRef, useEffect } from 'react'
import Transition from '../../utils/Transition'

const DropdownProfile = ({
  align
}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className='relative inline-flex'>
      <button
        ref={trigger}
        className='inline-flex justify-center items-center group'
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className='w-8 h-8 rounded-full' src='/img/logos/hubx-bcircle.png' width='32' height='32' alt='User' />
        <div className='flex items-center truncate'>
          {/* <span className='truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200'>Acme Inc.</span> */}
          <svg className='w-3 h-3 shrink-0 ml-1 fill-current text-slate-400' viewBox='0 0 12 12'>
            <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
          </svg>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-72 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded-md shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter='transition ease-out duration-200 transform'
        enterStart='opacity-0 -translate-y-2'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className='flex pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700'>
            <div className='mr-3 mt-1'>
              <img className='rounded' width={32} height={32} src='/img/logos/hubx-circle.png' alt='Profile' />
            </div>
            <div>
              <div className='font-medium text-slate-800 dark:text-slate-100'>HubX Consulting</div>
              <div className='text-xs text-slate-500 dark:text-slate-400 italic'>Administrator</div>
            </div>
            
          </div>
          <div className='grid grid-cols-12 gap-0 items-center text-xs text-center'>
            <a className='col-span-6 py-4 border-r border-slate-200 dark:border-slate-700' href='/'>
              <span className='hover:text-slate-300'>Profile</span>
            </a>
            <a className='col-span-6 py-4 border-slate-200 dark:border-slate-700' href='/'>
              <span className='hover:text-slate-300'>Settings</span>
            </a>
            <a className='col-span-6 py-4 border-t border-r border-slate-200 dark:border-slate-700' href='/'>
              <span className='hover:text-slate-300'>Account</span>
            </a>
            <a className='col-span-6 py-4 border-t border-slate-200 dark:border-slate-700' href='/'>
              <span className='hover:text-slate-300'>Logout</span>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default DropdownProfile