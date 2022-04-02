import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Notes from './Notes';
import AppointMent from './AppointMent';
import Document from './Document';


const ProfileCard = () => {
    const [patient, setpatient] = useState([])

    const fatchapi2 = async () => {
        const respons = await fetch(" https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
        const jsondata = await respons.json();
        const patientdata = jsondata[0];
        console.log(patientdata);
        setpatient(patientdata)
    }

    useEffect(() => {
        fatchapi2();
    }, [])

    return (
        <>
            <div className="flex w-fit rounded-lg  space-x-2">
                <div className="h-72 w-80 flex-col rounded-lg pt-10  flex  justify-start bg-white items-center p-5 space-y-2  ">
                    {/* profile */}
                    <Avatar sx={{ width: 60, height: 60 }} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <h1 className="text-xl text-black font-bold">{patient.name}</h1>
                    <p className='font-semibold text-gray-400 text-sm'>xyz@gmail.com</p>
                    <div className="flex justify-center items-center space-x-4 ml-6 ">
                        <div className="text-center">
                            <h1 className="text-center font-bold">{patient.Past}</h1>
                            <p className="text-xs text-gray-400 font-semibold">Past</p>
                        </div>
                        <div className="h-7 border border-gray-400"></div>
                        <div className="text-center">
                            <h1 className="text-center font-bold">{patient.Upcoming}</h1>
                            <p className="text-xs text-gray-400 font-semibold">upcomming</p>
                        </div>

                    </div>
                    <button className="px-4 py-2  rounded-md w-full border font-bold text-sm border-gray-400">Send Message</button>
                </div>
                <div className="grid grid-cols-3 p-3  text-start gap-1 h-72  rounded-lg  w-5/6 bg-white">
                    {/* profileinfo */}
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400 ">Gender</h1>
                        <p className="text-sm  font-semibold text-gray-600  ">{patient.Gender}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400 ">birthday</h1>
                        <p className="text-sm  font-semibold text-gray-600  ">{patient.Birthday}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400">Phone Numbar</h1>
                        <p className="text-sm  font-semibold text-gray-600  ">{patient['Phone Number']}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400 ">Street Address</h1>
                        <p className="text-sm  font-semibold  text-gray-600 ">{patient["Street Address"]}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold  text-gray-400">city</h1>
                        <p className="text-sm  font-semibold text-gray-600 ">Cilacap</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400 ">ZIP Code</h1>
                        <p className="text-sm  font-semibold text-gray-600  ">{patient["ZIP Code"]}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold text-gray-400 ">Member Status</h1>
                        <p className="text-sm  font-semibold  text-gray-600 ">{patient["Member Status"]}</p>
                    </div>
                    <div className=" border-b  border-gray-200 p-3">
                        <h1 className="text-xs  font-semibold  text-gray-400">Registered Date</h1>
                        <p className="text-sm  font-semibold  text-gray-600 ">{patient["Register Date"]}</p>
                    </div>
                </div>
                {/* <div className="space-y-3">
                    <Notes />
                    <Document />
                </div> */}

            </div>
            {/* <AppointMent /> */}
        </>


    )
}

export default ProfileCard