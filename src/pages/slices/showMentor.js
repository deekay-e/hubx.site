import { Dialog, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const ShowMentor = ({ mentor, open, close }) => {
  const list = [
    { title: 'Bio', data: mentor.bio },
    { title: 'Location', data: mentor.location },
    { title: 'Website', data: mentor.website },
    { title: 'Birthday', data: mentor.birthday }
  ]
  const content = (
    <Transition.Root appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-60' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={close}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-auto bg-white dark:bg-black py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-base font-semibold leading-6 pb-6'>
                        Profile
                      </Dialog.Title>
                    </div>
                    <div className='relative h-48'>
                      <img className='absolute w-full h-full object-cover' src={mentor.photo} alt='profile' />
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6 font-medium'>
                      <Dialog.Description>
                        <div className=''>
                          <div>
                            <div className='flex items-center'>
                              <h3 className='text-3xl'>{mentor.name}</h3>
                              <span className='inline-block rounded-full bg-green-400 ml-3 w-2 h-2 shrink-0'></span>
                            </div>
                            <p className='text-sm text-gray-500'>@{mentor.username}</p>
                          </div>
                          <div className='flex flex-wrap mt-5'>
                            <button className='inline-flex md:flex-1 shrink-0 justify-center items-center w-full rounded-md bg-blue-600 text-sm text-white dark:text-black duration-200 py-2 px-3 hover:bg-blue-500 dark:hover:bg-blue-700'>
                              Message
                            </button>
                            <button className='inline-flex flex-1 md:my-0 md:mx-3 my-3 justify-center items-center w-full rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 duration-200 text-sm py-2 px-3'>
                              Call
                            </button>
                            <div className='inline-flex md:my-0 my-3 md:ml-0 ml-3'>
                              <div className='relative inline-block text-left'>
                                <button className='inline-flex items-center p-2 rounded-md border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 duration-200'>
                                  <span className='t'></span>
                                  <EllipsisVerticalIcon width={22} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <dl className='text-sm'>
                            {list.map((l, idx) => (
                              <div key={idx} className='mt-5'>
                                <dt className='text-gray-500'>{l.title}</dt>
                                <dd className='mt-1 text-gray-800 dark:text-gray-200'>{l.data}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </Dialog.Description>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
  return content
}

export default ShowMentor