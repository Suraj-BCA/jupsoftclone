import React from 'react'

function HomeStudentStrength() {
  return (
    <div>
      <div className=' bg-gray-200 w-[55%] ml-8 rounded-xl border-[1px] border-slate-400'>
        <div className='flex justify-between items-center border-b-[1px] border-slate-400'>
          <div className='font-semibold text-xl p-4'>Students Strength</div>
          <div className='flex justify-between gap-3 pr-4'>
            <div>
              <input className='' type="checkbox" />
            </div>
            <div>Gender Wise</div>
          </div>
        </div>
        <div className='h-32 '></div>
      </div>
    </div>
  )
}

export default HomeStudentStrength
