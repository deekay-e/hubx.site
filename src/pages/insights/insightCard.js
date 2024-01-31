import { React } from 'react'

const InsightCard = (props) => {
  const content = (
    <>
      <article className='group rounded-xl overflow-hidden'>
        <div className='animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xs overflow-hidden'>
          <img
            alt={props.title}
            src={props.image}
            className='h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:scale-110 inset-0 object-center duration-200 overflow-hidden'
          />
        </div>
        
        <div className='p-4'>
          <time datetime={props.date} className='block text-xs text-gray-500'>
            {props.date}
          </time>

          <div className='mt-4 flex flex-wrap gap-1'>
            {props.tags.map((tag, idx) => (
              <span key={idx} className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600'>
                {tag}
              </span>
            ))}
          </div>

          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href='/'>
                <span className="absolute inset-0" />
                {props.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-50'>
              <props.authorImage />
            </div>
            
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href='/'>
                  <span className="absolute inset-0" />
                  John Doe
                </a>
              </p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
  return content
}

export default InsightCard