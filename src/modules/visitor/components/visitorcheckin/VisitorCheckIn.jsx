import React from 'react'
import VisitorSideMenu from '../visitorsidemenu.jsx/VisitorSideMenu';

function VisitorCheckIn() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className=" bg-white border-r-2">
        <VisitorSideMenu />
      </div>

      <div className="flex-1 overflow-y-auto pt-[7.5rem] ">
        <div className='border-b border-b-slate-400 flex justify-between'>
            <div className='flex gap-2 pl-6 pt-1'>
              <div><i className="text-2xl font-semibold ri-menu-line"></i></div>
              <div><p className='text-xl font-semibold'>Visitor Check-In</p></div>
              <div className='h-6 bg-gray-600 w-[1px] mt-1'></div>
              <div className='mt-1'><i class="text-base ri-lightbulb-line"></i></div>
              <div><p className='mt-1'>Page Tips</p></div>

          </div>
          {/* <div className='flex pr-4 text-2xl pb-2 cursor-pointer '>
            <div className='border border-r-0 border-gray-400 px-4 rounded-l-md hover:bg-slate-200'><i class="ri-user-add-fill"></i></div>
            <div className='border border-r-0 border-gray-400 px-4 hover:bg-slate-200'><i class="ri-user-3-line"></i></div>
            <div className='border border-gray-400 border-r-0 px-4 hover:bg-slate-200'><i class="ri-filter-2-fill"></i></div>
            <div className='border border-gray-400 px-4 hover:bg-slate-200'><i class="ri-printer-line"></i></div>
            <div className='border border-gray-400 border-l-0 px-4 rounded-r-md hover:bg-slate-200'><i class="ri-download-2-fill"></i></div>
          </div> */}
        </div>
        <div className="flex ml-5 pt-3 ">
          <div>
            <p>Visitor Type</p>
            <div className='flex'>
              <div>Outsider</div>
              <div>Parents</div>
            </div>
          </div>
          <div>
            <p>Prior Appointment?</p>
            <div className='flex'>
              <div>
                Yes
              </div>
              <div>
                No
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default VisitorCheckIn
