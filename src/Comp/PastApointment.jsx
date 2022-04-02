import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';


const Papoointment = ({ Appoinment }) => {
    return (
        <>

            <div className='bg-[#F2F5FA] overflow-y-scroll  h-80  w-full space-y-3'>

                <div className="flex justify-between p-5 space-x-2 bg-gray-300 ">
                    <div className="text-center px-2">
                        <h1 className="text-2xl ">{Appoinment["Post Appointment"].Date}</h1>
                        <p className="text-xs">9:00-10:00</p>
                    </div>
                    <div>
                        <h1 className="text-sm text-gray-400 font-bold">Treatement</h1>
                        <p className="text-sm font-bold">Open Access</p>
                    </div>

                    <div>
                        <h1 className="text-sm text-gray-400 font-bold">dentist</h1>
                        <p className="text-sm font-bold">{Appoinment["Post Appointment"].Dentist}</p>
                    </div>

                    <div>
                        <h1 className="text-sm text-gray-400 font-bold">nurse</h1>
                        <p className="text-sm font-bold">{Appoinment["Post Appointment"].Nurse}</p>
                    </div>
                    <div className="flex space-x-1 justify-center items-center">
                        <ArticleIcon color='primary' fontSize='small' />
                        <h1 className="text-blue-600 font-semibold text-sm">
                            <a href={Appoinment["Post Appointment"].Doc} target="_blank"> Note</a>
                        </h1>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Papoointment