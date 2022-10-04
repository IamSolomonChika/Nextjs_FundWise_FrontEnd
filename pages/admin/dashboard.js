import React, {useState} from 'react'

import CardLineChart from "../../components/user/Cards/CardLineChart.js";
import CardBarChart from "../../components/user/Cards/CardBarChart.js";
import CardPageVisits from "../../components/user/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/user/Cards/CardSocialTraffic.js";
import HeaderStats from "../../components/user/HeaderStats.js";
import Modal from '../../components/Modal'
import Image from 'next/image'

// layout for page
import Layout from '../../components/user/Layout'


export default function Dashboard() {

  const [flutterWave, setFlutterWave] = useState(false)
  const [paystack, setPaystack] = useState(false)

  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="relative w-full bg-blueGray-100">
          <HeaderStats />
        </div>
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </Layout>
  );
}

