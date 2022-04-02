import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';


const UappointMent = ({ Appoinment }) => {
    return (
        <>
            <div className='bg-[#F2F5FA] p-3 overflow-y-scroll h-80   w-full space-y-3'>


                <div className="flex justify-between p-5 space-x-2 bg-gray-300 ">
                    <div className="text-start space-y-1 px-2">
                        <h1 className="text-2xl ">
                            {Appoinment["Upcoming Appointments"].Date}
                        </h1>
                        <p className="text-xs  text-gray-400">
                            {Appoinment["Upcoming Appointments"].Time}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>
                    <div>
                        <h1 className="text-xs text-gray-400 font-semibold">Treatement</h1>
                        <p className="text-md font-bold">
                            {Appoinment["Upcoming Appointments"].Treatment}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>


                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">dentist</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Dentist}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">nurse</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Nurse}
                        </p>
                    </div>
                    <div className="flex space-x-1 justify-center items-center">
                        <ArticleIcon color='primary' fontSize='small' />
                        <h1 className="text-blue-600 text-xs font-semibold" >Note</h1>
                    </div>

                </div>

                <div className="flex justify-between p-5 space-x-2 bg-gray-300 ">
                    <div className="text-start space-y-1 px-2">
                        <h1 className="text-2xl ">
                            {Appoinment["Upcoming Appointments"].Date}
                        </h1>
                        <p className="text-xs  text-gray-400">
                            {Appoinment["Upcoming Appointments"].Time}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>
                    <div>
                        <h1 className="text-xs text-gray-400 font-semibold">Treatement</h1>
                        <p className="text-md font-bold">
                            {Appoinment["Upcoming Appointments"].Treatment}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>


                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">dentist</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Dentist}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">nurse</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Nurse}
                        </p>
                    </div>
                    <div className="flex space-x-1 justify-center items-center">
                        <ArticleIcon color='primary' fontSize='small' />
                        <h1 className="text-blue-600 text-xs font-semibold" >Note</h1>
                    </div>

                </div>

                <div className="flex justify-between p-5 space-x-2 bg-gray-300 ">
                    <div className="text-start space-y-1 px-2">
                        <h1 className="text-2xl ">
                            {Appoinment["Upcoming Appointments"].Date}
                        </h1>
                        <p className="text-xs  text-gray-400">
                            {Appoinment["Upcoming Appointments"].Time}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>
                    <div>
                        <h1 className="text-xs text-gray-400 font-semibold">Treatement</h1>
                        <p className="text-md font-bold">
                            {Appoinment["Upcoming Appointments"].Treatment}
                        </p>
                    </div>
                    <div className="border border-gray-400 h-10"></div>


                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">dentist</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Dentist}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs text-gray-400 font-bold">nurse</h1>
                        <p className="text-sm font-bold">
                            {Appoinment["Upcoming Appointments"].Nurse}
                        </p>
                    </div>
                    <div className="flex space-x-1 justify-center items-center">
                        <ArticleIcon color='primary' fontSize='small' />
                        <h1 className="text-blue-600 text-xs font-semibold" >Note</h1>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UappointMent