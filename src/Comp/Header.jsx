import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Menubar from './Menubar';

const Header = () => {
    return (
        <>
            <header className="  w-full flex h-fit justify-between  px-4 border-b border-gray-200 ">

                <div className="flex justify-center items-center p-4 space-x-2">

                    <PersonOutlineOutlinedIcon color="primary" />
                    <h1 className="text-lg font-bold  ">Diane Cooper</h1>
                </div>
                <div className="items-center flex justify-center space-x-2 ">
                    <div className="border border-black rounded-2xl flex items-center justify-start w-40  px-3 py-1">
                        <SearchOutlinedIcon fontSize='small' />
                        <input type="text" placeholder='search' className="w-fit bg-transparent text-black" />
                    </div>
                    <div className="flex space-x-3 justify-center items-center ">
                        <div className="bg-blue-700 rounded-full p-1 ">
                            <AddOutlinedIcon fontSize='small' />
                        </div>
                        <div className="bg-gray-300 rounded-full p-1 ">
                            <NotificationsOutlinedIcon fontSize='small' />
                        </div>
                    </div>


                </div>

            </header >
        </>

    )
}

export default Header