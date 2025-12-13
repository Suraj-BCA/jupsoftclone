import { Bell, Search, Settings, User } from 'lucide-react'
import React from 'react'


function HomeHeader() {
  return (
    <>
      <div className='flex justify-between items-center  h-14 border-b border-b-gray-200 '>
        <div className='flex gap-4'>
          <div className='text-[22px] font-[500] uppercase ml-4'>
            <h3>JUPSOFT INTERNATIONAL SCHOOL</h3>
          </div>
          <div className=''>
            <h1 className='font-extrabold text-xl'>|</h1>
          </div>
          <div className='text-xl font-medium '>
            <h3>Session-2025-26</h3>
          </div>
        </div>
        <div className='flex gap-6 mr-4'>
          <div className="relative ">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4  text-gray-600" />
            <input
              type="text"
              placeholder="Search here.."
              className="placeholder:font- placeholder:text-black placeholder:text-lg  pl-4 pr-3 py-2 border rounded-md outline-none"
            />
          </div>

          <div>
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white group"
            >
              <Bell
                className=" w-6 h-6 text-black transition-colors duration-200 group-hover:text-black "
              />
            </div>

          </div>
          <div className='inline-flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-all duration-200'>
            <Settings className=" " />

          </div>
          <div className='inline-flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer'>
            <User />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeader
