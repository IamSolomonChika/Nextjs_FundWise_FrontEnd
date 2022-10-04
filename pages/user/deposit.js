import React, { Fragment, useState } from 'react'
import Layout from '../../components/user/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../../components/Modal'
import { useStateContext } from '../../context/UserContext'
import CardPageVisits from "../../components/user/Cards/CardPageVisits.js";


const deposit = () => {

  const [flutterWave, setFlutterWave] = useState(false)
  const [paystack, setPaystack] = useState(false)


  return (
    <Fragment>
      <Layout>
        <div className='relative bg-stone-800 md:py-10 px-4 py-10'>
          <div className='md:px-10 mx-auto w-full'>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='w-10/12 h-40 md:w-5/12 px-4 bg-stone-50 m-4 rounded items-center justify-center'>
                <h1 className='text-center font-bold text-2xl'>Deposit with</h1>
                <div className="flex-col flex items-center justify-center">
                  <Image src='/images/FlutterWave.png' width={290} height={100} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <button onClick={() => setFlutterWave(true)} className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mt-2 mb-5'>
                    Deposit
                  </button>
                </div>
              </div>
              <div className='w-10/12 h-40 md:w-5/12 px-4 bg-stone-50 m-4 rounded items-center justify-center'>
                <h1 className='text-center font-bold text-2xl'>Deposit with</h1>
                <div className="flex-col flex items-center justify-center mt-5">
                  <Image src='/images/Paystack.png' width={290} height={80} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <button onClick={() => setPaystack(true)} className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mt-2 mb-5'>
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' w-full flex items-center justify-center'>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
        </div>
        <div>
          <Modal visible={flutterWave} onClose={() => setFlutterWave(false)}>
            <form id="paymentForm" className="max-w-md m-auto p-4 bg-white rounded-lg">
              <div className="wrapper">
                <header className='flex justify-center align-center'>
                  <h1 className="font-bold text-2xl">Deposit</h1>
                </header>
                <div className="form-control">
                  <label for="first-name">First Name</label>
                  <input type="text" id="first-name" className="w-full rounded-md mt-1" />
                </div>
                <div className="form-control">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" className="w-full rounded-md mt-1" />
                </div>
                <div className="form-control">
                  <label for="email">Email Address</label>
                  <input type="email" id="email-address" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-control">
                  <label for="phone">Phone </label>
                  <input type="tel" id="phone" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-control">
                  <label for="amount">Amount</label>
                  <input type="number" id="amount" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-submit">
                  <button onClick={() => { }} className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mt-2 mb-5'>
                    Deposit
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
        <div>
          <Modal visible={paystack} onClose={() => setPaystack(false)}>
            <form id="paymentForm" className="max-w-md m-auto p-4 bg-white rounded-lg">
              <div className="wrapper">
                <header className='flex justify-center align-center'>
                  <h1 className="font-bold text-2xl">Deposit</h1>
                </header>
                <div className="form-control">
                  <label for="first-name">First Name</label>
                  <input type="text" id="first-name" className="w-full rounded-md mt-1" />
                </div>
                <div className="form-control">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" className="w-full rounded-md mt-1" />
                </div>
                <div className="form-control">
                  <label for="email">Email Address</label>
                  <input type="email" id="email-address" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-control">
                  <label for="phone">Phone </label>
                  <input type="tel" id="phone" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-control">
                  <label for="amount">Amount</label>
                  <input type="number" id="amount" className="w-full rounded-md mt-1" required="" />
                </div>
                <div className="form-submit">
                  <button onClick={() => { }} className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mt-2 mb-5'>
                    Deposit
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </Layout>
    </Fragment>
  )
}

export default deposit