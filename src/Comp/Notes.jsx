import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Notes = () => {
    return (
        <div className="px-2 py-5 w-80  bg-white space-y-2  ">
            <div className="flex justify-between items-center px-5">
                <h1 className=" font-semibold text-sm ">Notes</h1>
                <p className="text-blue-700 text-sm font-semibold">See all</p>
            </div>
            <div className="px-4 py-6 bg-[#F2F5FA] ">
                <p className="text-xs ">-Lorem ipsum dolor sit amet consectetur,</p>
                <p className="text-xs ">-Lorem ipsum dolor sit amet </p>
                <p className="text-xs ">-Lorem ipsum sit amet consectetur, </p>
                <div className="w-full  pl-44  relative left-6 mt-10 top-2">
                    <button className="bg-blue-700 text-white font-semibold text-xs p-2 rounded-lg">save note</button>
                </div>
            </div>
            <div className="p-3">

                <p className="text-xs mb-2 ">Lorem ipsum dolor, sit amet </p>
                <div className="flex items-center justify-between">
                    <div className="flex justify-between  items-center">
                        <PersonOutlineOutlinedIcon fontSize='small' color='primary' />
                        <p className="text-xs text-gray-400 font-semibold">Lorem, ipsum dolor.</p>
                    </div>
                    <h1 className="text-xs font-semibold text-gray-500">20 Nov 19</h1>
                </div>



            </div>
        </div>
    )
}

export default Notes