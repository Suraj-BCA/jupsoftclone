import React from 'react'

function HomeFooter() {
  return (
    <div>
      <div className='flex justify-between  bg-gray-200 p-[0.4rem pl-5 border-t-2 border-t-gray-300 fixed bottom-0  items-center w-full'>
        <div className='text-[14px]'>
          <p>Page ID : (1)</p>
        </div>
        <div className='flex text-center  gap-[1px]'>
          <div className='pt-2 '>
            <a className='bg-pink-800 pb-3 pt-2 px-4 py-1 text-white hover:pt-4 transition-all duration-300' href="http://" target="_blank" rel="noopener noreferrer">Product Overview</a>
          </div>
          <div className=' pt-2'>
            <a className='bg-orange-600 pb-3 pt-2 px-4 py-2 text-white hover:pt-4 transition-all duration-300' href="http://" target="_blank" rel="noopener noreferrer">Support</a>
          </div>
          <div className='p-2'>
            <p>Integration</p>
          </div>
          <div className='p-2'>
            <p>|</p>
          </div>
          <div className='p-2'>
            <a href="http://" target="_blank" rel="noopener noreferrer">Powered by :: Jupsoft</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
