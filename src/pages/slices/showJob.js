import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'

const ShowJob = ({ position, close, open }) => {
  const content = (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-60' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all m-4'>
                <div className='relative bg-blue-50'>
                  <div className='absolute inset-x-0 bottom-0'>
                    <svg
                      viewBox='0 0 224 12'
                      fill='currentColor'
                      className='w-full -mb-1 text-white'
                      preserveAspectRatio='none'
                    >
                      <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
                    </svg>
                  </div>
                  <div className='px-6 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
                      <Dialog.Title
                        as='h1'
                        className='text-3xl font-bold leading-6 py-6 md:py-12'
                      >
                        {position?.title}
                      </Dialog.Title>
                      <p className='mb-6 text-base text-blue-600 md:text-lg'>
                        <a href={position?.website}>Visit website</a>
                        <span className='mx-7'>·</span>
                        <a href={position?.email}>Contact us</a>
                      </p>
                    </div>
                  </div>
                  <div className='px-6 md:px-8'>
                  </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-8'>
                  <div className=''>
                    <Dialog.Description>
                      <h2 className='text-xl font-medium mt-10 mb-8'>About</h2>
                      {position?.about.map((p, i) => <p key={i} className='mb-2 text-gray-700'>{p}</p>)}
                    </Dialog.Description>
                  </div>
                </div>

                <div className='text-center mt-24 md:mt-36'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={close}
                  >
                    Got it, thanks!
                  </button>
                  <button className='ml-3 text-gray-600 hover:text-blue-600 text-sm font-medium' type='button'>
                    Add job listing
                  </button>
                </div>
                <div className='max-w-4xl mx-auto my-9 p-6 md:p-8 text-center'>
                  <p className='text-xs text-gray-500'>
                    This job position is given to provide an overview to our career service options with the option to get the process handled by our agents for a premium. To learn more about what your project will entail, do reach out to us on any of the <a href='/contact'>options we've provided</a></p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
  return content
}

export default ShowJob