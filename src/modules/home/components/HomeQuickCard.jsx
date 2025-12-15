import React from 'react'

function HomeQuickCard() {
  return (
    <div>
      <div className='bg- w-[28rem] rounded-2xl items-center m-10 h-28 bg-white'>
        <div className='flex justify-between items-center pl-4 pt-3'>
          <div className='w-[3rem]' ><img className='' src="https://econnectapp.jupsoft.com/assets-new/images/userstatusnew.png" alt="" /></div>
          <div>
            <div className='font-semibold text-2xl text-slate-800'>28</div>
            <div className='text-green-800'>Active</div>
          </div>
          <div className='bg-slate-200 h-14 w-[2px] '></div>
          <div className='items-center justify-center flex-col pr-[12rem]'>
            <div className='pl-2 font-semibold text-2xl text-slate-800'>119</div>
            <div className='text-red-600'>De-Active</div>
          </div>
        </div>
        <div className='pl-[5.5rem] text-lg pt-1'>User Count</div>
      </div>
    </div>
  )
}

export default HomeQuickCard
