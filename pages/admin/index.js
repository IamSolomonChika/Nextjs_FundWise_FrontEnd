import React, { useEffect } from 'react';
import Router from 'next/router';

export default function index() {
  useEffect(() => {
    Router.push('/admin/dashboard');
  });

  return <div />
}




