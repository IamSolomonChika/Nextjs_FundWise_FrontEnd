import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const DepositsTable = () => {

    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDeposits();
    }, []);

    // const getDeposits = async () => {
    //     setLoading(true);
    //     const res = await axios.get('/api/user/deposits');
    //     setGridData(res.data);
    //     setLoading(false);
    // }

    console.log("gridDate", gridData);

    return (
        <h1>Deposits</h1>
    )
}

export default DepositsTable