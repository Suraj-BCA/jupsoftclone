import React from 'react'

function HomeStudentStrength() {
  return (
    <div>
      <div className=' bg-slate-100 w-[72rem]  ml-8 rounded-xl border-[1px] border-slate-300'>
        <div className='flex justify-between items-center border-b-[1px] border-slate-300'>
          <div className='font-semibold text-xl p-4'>Students Strength</div>
          <div className='flex justify-between gap-3 pr-4'>
            <div>
              <input className='' type="checkbox" />
            </div>
            <div>Gender Wise</div>
          </div>
        </div>
        <div className='h-[400px] bg-white'></div>
      </div>
    </div>
  )
}

export default HomeStudentStrength
