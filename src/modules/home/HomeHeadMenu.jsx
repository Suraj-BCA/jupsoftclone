import React from 'react'

function HomeHeadMenu() {
  return (
    <div>
      <div className='flex justify-between items-center pt-3 pb-1 border-b-[1px]  ' style={{backgroundImage:"url('https://econnectapp.jupsoft.com/assets-new/images/teacherdashboardbg.jpg')"}}>
        <div className='flex justify-between gap-6 pl-8 text-[16px] opacity-100'>
          <div className="flex items-center gap-2 hover:text-blue-800 cursor-pointer ">
            <i className="ri-line-chart-line text-lg"></i>
            <span className='cursor-pointer'>Dashboard</span>
          </div>

          <div className='flex items-center gap-2 hover:text-blue-800 cursor-pointer '>
            <i class="ri-settings-3-fill"></i>
            <span className='cursor-pointer'>New Updates</span>
          </div>
          <div className='flex items-center gap-2 hover:text-blue-800 cursor-pointer '>
            <i class="ri-artboard-line"></i>
            <span className='cursor-pointer'>Traning Video</span>
          </div>
          <div className='flex items-center gap-2 hover:text-blue-800 cursor-pointer  hover:border-b-[1px] hover:border-b-blue-800  '>
            <i class="ri-slack-fill"></i>
            <span className=''>Activity</span>
          </div>
        </div>
        <div className='flex justify-between gap-6 items-center'>
          <div className='bg-slate-300 rounded-full text-2xl'><i className="ri-headphone-fill items-center p-2"></i></div>
          <div className='pr-4'>
            <p>You can directly talk to us every Monday to Saturday 8:00 AM - 6:00 PM (Mon-Sat)</p>
            <span className='pl-[125px]'>Jupsoft Helpline: +91 70912-59062, Email: support@jupsoft.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeadMenu
