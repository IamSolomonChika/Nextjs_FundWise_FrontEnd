import React from 'react'
import { useStateContext } from '../context/UserContext'
import { MdOutlineCancel } from 'react-icons/md'


const Modal = ({ visible, onClose, children }) => {
    if (!visible) return null;

    const handleModal = (e) => {
        if (e.target.id === 'wrapper')
            onClose()
    }

    const { screenSize } = useStateContext()
    return (
        <div id='wrapper' className='fixed inset-0 bg-stone-900 bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center' onClick={handleModal} >
            <div className={`flex flex-col ${screenSize >= 900 ? 'ml-60 w-4/12' : 'w-9/12'}`}>
                <button onClick={() => onClose()} className='text-white text-2xl place-self-end'>
                    <MdOutlineCancel />
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
            )
}

            export default Modal