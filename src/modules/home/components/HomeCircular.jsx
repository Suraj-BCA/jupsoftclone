import React from 'react'
import HomeCircularComp from './HomeCircularComp'

function HomeCircular() {
  return (
    <div className=''>
      <div className='w-[40rem] bg-gray-100 border-[1px] border-slate-300  rounded-xl '>
        <div className='border-b-[1px]  border-slate-300 '>
          <p className='p-4 text-xl font-semibold'>Circulars</p>
        </div>
        <div className='h-[400px] overflow-y-auto'>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
          <HomeCircularComp/>
        </div>
      </div>
    </div>
  )
}

export default HomeCircular
