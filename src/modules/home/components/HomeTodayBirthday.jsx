import React from 'react'

function HomeTodayBirthday() {
  return (
    <div className=''>
      <div className='w-[40rem]  border-[1px] border-slate-300  rounded-xl '>
        <div className='border-b-[1px] bg-gray-100 rounded-t-xl border-slate-300 '>
          <p className='p-4 text-xl font-semibold'>Today's Birthdays</p>
        </div>
        <div className='h-[400px] '>
          <div className='font-semibold text-base bg-slate-300 flex justify-evenly gap-24 w-[36rem] ml-8 p-[4px] rounded-lg mt-3 mb-1'>
            <div>Student</div>
            <div>Employee</div>
          </div>
          <div className='flex justify-center '>
            <div className='h-[21rem] w-[18rem] border-2 items-center flex-col flex justify-center rounded-l-lg '>
              <div>
                 <img className='opacity-25 h-20 w-20' src="https://econnectapp.jupsoft.com/assets-new/images/bdayimg1.png" alt="" />
              </div>
              <div>
                <p className='text-center mt-2'>There is no birthday <br/> today.</p>
              </div>
             
            </div>
            <div className=' h-[21rem] w-[18rem] border-2 border-l-0 items-center flex-col flex justify-center rounded-r-lg'>
              <div>
                 <img className='opacity-25 h-20 w-20' src="https://econnectapp.jupsoft.com/assets-new/images/bdayimg1.png" alt="" />
              </div>
              <div>
                <p className='text-center mt-2'>There is no birthday <br/> today.</p>
              </div>
             
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeTodayBirthday
