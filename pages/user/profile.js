import React from 'react'


// components

import CardSettings from "/components/user/Cards/CardSettings.js";
import CardProfile from "/components/user/Cards/CardProfile.js";

// layout for page

import Layout from '../../components/user/Layout'

export default function Settings() {
  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </Layout>
  );
}

