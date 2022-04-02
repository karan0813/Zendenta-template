import React, { useEffect, useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Document = () => {
    const [mouse1, setmouse1] = useState(false)
    const [mouse2, setmouse2] = useState(false)
    const [mouse3, setmouse3] = useState(false)
    const [mouse4, setmouse4] = useState(false)
    const [mouse5, setmouse5] = useState(false)

    const [seemore, setseemore] = useState(false)

    const [file, setfile] = useState([])
    const fatchapi = async () => {
        const respons = await fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files")
        const jsondata = await respons.json();
        const patientdata = jsondata[0];
        console.log(patientdata);
        setfile(patientdata)
    }

    useEffect(() => {
        fatchapi();
    }, [])
    return (
        <div className="px-2 py-5 w-80   bg-white space-y-1  rounded-lg ">
            <div className="flex justify-between items-center px-5 mb-3">
                <h1 className=" font-bold text-xs ">Files/Document</h1>
                <p className="text-blue-700 text-xs font-bold" onClick={() => (setseemore(true))}><UploadFileIcon fontSize='small' /> See all</p>
            </div>
            <div className="flex justify-between items-center border border-gray-400 shadow-md px-4 py-2">
                <div className="flex space-x-2">
                    <UploadFileIcon fontSize="small" color="action" />
                    <h1 className='text-xs font-bold text-gray-400' onMouseMove={() => (setmouse1(false))}>
                        Check up result.pdf
                    </h1>
                </div>
                {!mouse1 && <p onMouseMove={() => (setmouse1(true))} className="text-xs text-gray-400">123kb</p>}
                {mouse1 && <div>
                    <DeleteOutlineIcon fontSize="small" color="action" />
                    <ArrowCircleDownIcon fontSize="small" color="action" className="hover:text-blue-600" />
                </div>
                }
            </div>
            <div className="flex justify-between items-center border border-gray-400 shadow-md px-4  py-2">
                <div className="flex space-x-2">
                    <UploadFileIcon fontSize="small" color="action" />
                    <h1 className='text-xs font-bold text-gray-400' onMouseMove={() => (setmouse2(false))}>
                        Check up result.pdf
                    </h1>
                </div>
                {!mouse2 && <p onMouseMove={() => (setmouse2(true))} className="text-xs text-gray-400">173kb</p>}
                {mouse2 && <div>
                    <DeleteOutlineIcon fontSize="small" color="action" />
                    <ArrowCircleDownIcon fontSize="small" color="action" className="hover:text-blue-600" />
                </div>
                }
            </div>
            <div className="flex justify-between items-center border border-gray-400 shadow-md px-4  py-2">
                <div className="flex space-x-2">
                    <UploadFileIcon fontSize="small" color="action" />
                    <h1 className='text-xs font-bold text-gray-400' onMouseMove={() => (setmouse3(false))}>
                        Check up result.pdf
                    </h1>
                </div>
                {!mouse3 && <p onMouseMove={() => (setmouse3(true))} className="text-xs text-gray-400">122kb</p>}
                {mouse3 && <div>
                    <DeleteOutlineIcon fontSize="small" color="action" />
                    <ArrowCircleDownIcon fontSize="small" color="action" className="hover:text-blue-600" />
                </div>
                }
            </div>
            <div className="flex justify-between items-center border border-gray-400 shadow-md px-4  py-2">
                <div className="flex space-x-2" onMouseMove={() => (setmouse4(false))}>
                    <UploadFileIcon fontSize="small" color="action" />
                    <h1 className='text-xs font-bold text-gray-400'>Dental X-Ray result.pdf</h1>
                </div>
                {!mouse4 && <p onMouseMove={() => (setmouse4(true))} className="text-xs text-gray-400">122kb</p>}
                {mouse4 && <div>
                    <DeleteOutlineIcon fontSize="small" color="action" />
                    <ArrowCircleDownIcon fontSize="small" color="action" className="hover:text-blue-600" />
                </div>
                }
            </div>
            {seemore &&
                <div className="flex justify-between items-center border border-gray-400 shadow-md px-4  py-2">
                    <div className="flex space-x-2" onMouseMove={() => (setmouse5(false))}>
                        <UploadFileIcon fontSize="small" color="action" />
                        <h1 className='text-xs font-bold text-gray-400'>Dental X-Ray result.pdf</h1>
                    </div>
                    {!mouse5 && <p onMouseMove={() => (setmouse5(true))} className="text-xs text-gray-400">122kb</p>}
                    {mouse5 && <div>
                        <DeleteOutlineIcon fontSize="small" color="action" />
                        <ArrowCircleDownIcon fontSize="small" color="action" className="hover:text-blue-600" />
                    </div>
                    }
                </div>
            }
        </div >
    )
}

export default Document