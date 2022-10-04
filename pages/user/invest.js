import React from 'react'
import Layout from '../../components/user/Layout'
import CardStats from "../../components/user/Cards/CardStats.js";
import CardPageVisits from "../../components/user/Cards/CardPageVisits.js";

const invest = () => {
  return (
    <Layout>
      <div className='relative bg-stone-800 md:py-10 px-4 py-10'>
        <div className='md:px-10 mx-auto w-full'>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='w-10/12 h-40 md:w-5/12 px-4 bg-stone-50 m-4 rounded items-center justify-center'>
              <div className="w-full px-4 mt-4">
                <CardStats
                  statSubtitle="AVAILABLE BALANCE"
                  statTitle="₦350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <button onClick={() => setFlutterWave(true)} className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4  rounded mt-2 mb-5'>
                  Invest
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
    </Layout>
  )
}

export default invest