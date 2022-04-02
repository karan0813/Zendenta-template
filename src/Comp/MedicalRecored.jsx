import React from 'react'

const Mappointment = ({ Appoinment }) => {
    return (
        <div className="bg-[#F2F5FA] p-3 overflow-y-scroll h-80   w-full space-y-3 items-center" >
            <div className="flex justify-between p-5 space-x-2 bg-green-300  items-center">
                <h1 className="text-2xl animate-bounce  text-center  ">{Appoinment["Medical Records"].status}</h1>
            </div>
        </div>
    )
}

export default Mappointment