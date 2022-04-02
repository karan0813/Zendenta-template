import React, { useEffect, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import UappointMent from './UappointMent';
import Papoointment from './Papoointment';
import { Link } from 'react-router-dom';
import Mappointment from './Mappointment';

const AppointMent = () => {
    const [active1, setactive1] = useState(true)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)
    const [Appoinment, setAppoinment] = useState([])


    const fatchapi1 = async () => {
        const respons = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
        const jsondata = await respons.json();
        const patientdata = jsondata[0];
        console.log(patientdata);
        setAppoinment(patientdata)
    }

    useEffect(() => {
        fatchapi1();
    }, [])



    return (
        <>
            <div className=' appoinment rounded-lg p-5 h-fit -mt-8  bg-white  '>
                <div className="  flex justify-start items-center mb-3 p-1 rounded-lg space-x-8 bg-[#F2F5FA] w-5/6">



                    <div className={`p-3 rounded-lg ${active1 && "bg-white text-blue-700"}  text-center text-sm font-bold`}
                        onClick={() => { setactive1(true); setactive2(false); setactive3(false) }}>Upcomming Appointment</div>

                    <div className={`p-3 rounded-lg ${active2 && "bg-white text-blue-700"}  text-center text-sm font-bold`}
                        onClick={() => { setactive2(true); setactive1(false); setactive3(false) }}>Post Appointment</div>
                    <div className={`p-3 rounded-lg ${active3 && "bg-white text-blue-700"}  text-center text-sm font-bold`}
                        onClick={() => { setactive3(true); setactive1(false); setactive2(false) }}>Medical Appointment</div>

                </div>
                <div className="flex justify-between items-center px-4  py-4 bg-[#F2F5FA]">
                    <h1 className="font-extrabold text-xs">Root Canal Treatment</h1>
                    <div className="p-2 bg-white flex justify-center items-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <h1 className="font-bold text-xs text-gray-400">Show Previous Tretment</h1>
                    </div>
                </div>
                <div className="border border-gray-200 w-full"></div>

                {active1 && <UappointMent Appoinment={Appoinment} />}

                {active2 && <Papoointment Appoinment={Appoinment} />}
                {active3 && <Mappointment Appoinment={Appoinment} />}

            </div>

        </>
    )
}

export default AppointMent