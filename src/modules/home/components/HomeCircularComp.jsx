import React from 'react'

function HomeCircularComp() {
  return (
    <div>
      <div className='border-b-[1px] bg-white border-slate-300 px-2 py-2'>
        <div className='flex justify-between items-center px-4 '>
          <div>Important winter assignment</div>
          <div className='text-2xl '><i className="bg-slate-300 text-center rounded-full ri-arrow-drop-right-line"></i></div>
        </div>
        <div className='px-4 flex gap-2'>
          <div>
            <i class="ri-calendar-2-line"></i>
          </div>
          <div>
            05 Dec, 2025
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeCircularComp
