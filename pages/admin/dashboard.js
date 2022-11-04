import React, {useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import CardLineChart from "../../components/user/Cards/CardLineChart.js";
import CardBarChart from "../../components/user/Cards/CardBarChart.js";
import CardPageVisits from "../../components/user/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/user/Cards/CardSocialTraffic.js";
import HeaderStats from "../../components/admin/HeaderStats.js";
import Modal from '../../components/Modal'
import Image from 'next/image'

import { getUsers } from '../../actions/admins';

// layout for page
import Layout from '../../components/admin/Layout'


export default function Dashboard() {

  const [flutterWave, setFlutterWave] = useState(false)
  const [paystack, setPaystack] = useState(false)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers()); 
  // }, [dispatch]);

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

