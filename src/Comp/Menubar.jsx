import React from 'react'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const Menubar = () => {
    return (
        <div className="flex justify-between px-3 py-2 items-center  border-b border-gray-300 ">
            <div className="flex  items-center space-x-3 ">
                <h1 className="capitalize text-blue-600  font-bold text-sm">patient list </h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <h1 className="capitalize text-gray-400 font-bold text-sm">dione Cooper</h1>
            </div>
            <div className="space-x-3 flex justify-center items-center ">
                <div className="bg-white px-2 py-1 rounded-md">
                    <LocalPrintshopIcon fontSize="medium" />
                </div>
                <div className="bg-white px-2 py-1 flex justify-center items-center rounded-md ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <h1 className="capitalize px-2 py-1 text-sm ">edit patient</h1>
                </div>
            </div>
        </div>
    )
}

export default Menubar