import React from 'react'

function HomeFooterSection() {
  return (
    <div>
      <div className='h-[17rem] mt-8 pt-1' style={{backgroundImage:"url('https://econnectapp.jupsoft.com/assets-new/images/teacherdashboardbg.jpg')"}}>
        <div className='text-center my-4'>
          <p>Have an idea to help us improve? <span className='text-blue-700'>Send Feedback <i className="ri-arrow-drop-right-line text-3xl leading-none align-middle"></i></span> </p>
        </div>
        <div className='border-b-[1px] border-gray-400 w-[97%] m-auto '></div>
        <div className='flex items-center mx-10 mt-6'>
          <div className=''>
            <img className='w-[12rem]' src="https://econnectapp.jupsoft.com/assets-new/images/productinfo.png" alt="" />
          </div>
          <div className='w-[47rem] '>
            <h1 className='text-2xl py-1'>Need a Product Overview?</h1>
            <p>We're here to support your success. At Jupsoft, we’re committed to delivering exceptional service and tailored solutions that meet your needs. Let’s explore how our products can help you achieve your goals. Schedule your training overview : <span className='text-blue-700 font-semibold text-[1rem] '>Click Me <i className="font-normal ri-arrow-drop-right-line text-3xl leading-none align-middle"></i>
            </span> </p>
            
          </div>
          <div className='h-28 bg-slate-400 w-[1px] ml-16'></div>



          <div className='flex justify-between gap-6 items-center pl-[9.4rem] mb-14'>
            <div className='bg-slate-300 rounded-full text-2xl'><i className="ri-headphone-fill items-center p-2"></i></div>

            <div className='pr-4'>
              <p>You can directly talk to us every Monday to Saturday 8:00 AM - 6:00 PM (Mon-Sat)</p>
              <span className='pl-[125px]'>Jupsoft Helpline: +91 70912-59062, Email: support@jupsoft.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooterSection
