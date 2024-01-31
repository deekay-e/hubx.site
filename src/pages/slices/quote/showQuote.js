import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'

const ShowQuote = ({ quote, close, quoteOpen, cat}) => {
  const content = (
    <Transition appear show={quoteOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={close}>
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
          <div className='flex min-h-full items-center justify-center p-6 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Here's the quote
                </Dialog.Title>
                <Dialog.Description>
                  For your {cat.toLowerCase()} gig
                </Dialog.Description>
                <div className='mt-3'>
                  <p className='text-[4rem] text-gray-500 p-6'>
                    ${quote}
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={close}
                  >
                    Got it, thanks!
                  </button>
                  <button className='ml-3 text-gray-600 hover:text-blue-600 text-sm font-medium' type='button'>
                    Add to cart
                  </button>
                </div>
                <div className='mt-9'>
                  <p className='text-xs text-gray-500'>
                    This quote is given to serve as an overview or introduction to our service options and a budget estimate to get started on. For a more concrete and detailed insight into what your project will entail, do reach out to us on any of the options we've provided</p>
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

export default ShowQuote