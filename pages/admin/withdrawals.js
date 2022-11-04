import React from 'react'
import CardDepositHistory from '../../components/admin/Cards/CardDepositHistory'
import Layout from '../../components/admin/Layout'

const withdrawals = () => {
    return (
        <Layout>
            <div>
                <div className='flex w-full items-center justify-center px-4 py-2'>
                    <div className='flex flex-col w-full max-w-md'>
                        <h1 className='flex items-center justify-center font-extrabold'>Withdrawal Requests</h1>
                    </div>
                </div>
                <div>
                    <div className='flex w-full items-center justify-center px-4 py-2'>
                        <div className='flex flex-col w-full lg:1/2'>
                            <div className='flex flex-col w-full'>
                                <CardDepositHistory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withdrawals