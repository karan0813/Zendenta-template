import React, { useEffect, useState } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
    const [open, setopen] = useState(false)
    const [toggle, settoggle] = useState(false)
    const [doctor, setdoctor] = useState([])
    const fatchapi = async () => {
        const respons = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
        const jsondata = await respons.json();
        const patientdata = jsondata[0];
        console.log(patientdata);
        setdoctor(patientdata)
    }

    useEffect(() => {
        fatchapi();
    }, [])

    return (
        <>
            {!open ?
                <div className="w-60  py-4  bg-gray-200 navheight ease-in duration-500  rounded-l-lg static z-10">
                    <div div className="flex justify-evenly items-center" >
                        <img className="object-contain h-10 w-10" src="https://www.pngfind.com/pngs/m/65-651964_hospital-png-transparent-png.png" alt="..." />
                        <div>
                            <h1 className="text-gray-800 font-bold text-xl">Zendenta</h1>
                            <p className="text-sm text-gray-600 font-semibold">Lorem ipsum dolor </p>
                        </div>
                        <svg onClick={() => (setopen(true))} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>

                    </div>
                    <div className="mt-4  flex-1 ">
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-blue-600">
                            <HelpOutlineIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">Overview</h1>
                        </div>
                        <div className="flex justify-start space-x-4 items-center   text-black py-4 px-5 cursor-pointer hover:bg-blue-600" >
                            <CalendarMonthIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">calendar</h1>
                        </div>
                        <div className="flex justify-start space-x-4 items-center   text-black py-4 px-5 cursor-pointer hover:bg-blue-600">
                            <PersonIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">Patient list</h1>
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-blue-600">
                            <ChatIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">messages</h1>
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-blue-600">
                            <PaymentIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">Payment information</h1>
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-blue-600">
                            <SettingsIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-xs font-extrabold text-gray-700">setting</h1>
                        </div>

                    </div>
                    <div className=" relative -bottom-36 ">
                        <div className="flex justify-start space-x-4 items-center  text-black py-3 px-5 cursor-pointer hover:bg-blue-600 ">
                            <PrivacyTipIcon fontSize='small' color='action' />
                            <h1 className="capitalize text-sm font-semibold text-gray-400">help ?</h1>
                        </div>
                        <div className="border-b border-gray-400 w-full"></div>

                        <div className="p-3 flex justify-center items-center w-64 space-x-5">
                            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/indian-male-doctor-picture-id177373093?k=20&m=177373093&s=612x612&w=0&h=-PQwmaJszuQyxLQYuWL4VL731lr_dnhrttc4AOcB3-k=" />
                            {toggle && <div>
                                <h1 className="text-md font-semibold ">{doctor.name}</h1>
                                <p className="text-sm text-gray-800 font-semibold">{doctor.specification}</p>
                            </div>}
                            {!toggle ? <svg onClick={() => (settoggle(true))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> :
                                <svg onClick={() => (settoggle(false))} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>}
                        </div>

                    </div>
                </div> :
                <div className="w-20  py-4  bg-white navheight ease-in duration-500  rounded-l-lg">
                    <div div className="flex justify-evenly items-center" >
                        <img className="object-contain h-10 w-10" src="https://www.pngfind.com/pngs/m/65-651964_hospital-png-transparent-png.png" alt="..." />

                        <svg onClick={() => (setopen(false))} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="mt-4  flex-1 ">
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-gray-600">
                            <HelpOutlineIcon fontSize='small' />
                        </div>
                        <div className="flex justify-start space-x-4 items-center   text-black py-4 px-5 cursor-pointer hover:bg-gray-600" >
                            <CalendarMonthIcon fontSize='small' />
                        </div>
                        <div className="flex justify-start space-x-4 items-center   text-black py-4 px-5 cursor-pointer hover:bg-gray-600">
                            <PersonIcon fontSize='small' />
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-gray-600">
                            <ChatIcon fontSize='small' />
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-gray-600">
                            <PaymentIcon fontSize='small' />
                        </div>
                        <div className="flex justify-start space-x-4 items-center  text-black py-4 px-5 cursor-pointer hover:bg-gray-600">
                            <SettingsIcon fontSize='small' />
                        </div>

                    </div>
                    <div className=" absolute -bottom-64 ">
                        {/* <div className="flex justify-start space-x-4 items-center  text-black py-3 px-5 cursor-pointer hover:bg-gray-600 ">
                            <PrivacyTipIcon fontSize='small' />
                            <h1 className="capitalize text-md font-semibold">help ?</h1>
                        </div> */}
                        {/* <div className="p-3 flex justify-center items-center w-64 space-x-5">
                            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/indian-male-doctor-picture-id177373093?k=20&m=177373093&s=612x612&w=0&h=-PQwmaJszuQyxLQYuWL4VL731lr_dnhrttc4AOcB3-k=" />
                            <div>
                                <h1 className="text-md font-semibold ">Drg.Adam H.</h1>
                                <p className="text-sm text-gray-800 font-semibold">Lorem</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div> */}

                    </div>
                </div>
            }

        </>
    )
}

export default Navbar