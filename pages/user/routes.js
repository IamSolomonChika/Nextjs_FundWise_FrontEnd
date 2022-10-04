
import {MdOutlineSpaceDashboard, MdOutlineLocalOffer} from 'react-icons/md';
import {RiLuggageDepositLine} from 'react-icons/ri';
import {GiMoneyStack} from 'react-icons/gi';
import {GrMoney} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg';
import {FiSettings, FiLogOut} from 'react-icons/fi';


export const routes = [
    {
        id: 1,
        name: 'My Dashboard',
        icon: <MdOutlineSpaceDashboard /> ,
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'Deposit',
        icon: <RiLuggageDepositLine />,
        path: '/deposit'
    },
    {
        id: 3,
        name: 'Withdraw',
        icon: <GiMoneyStack />,
        path: '/withdraw'
    },
    {
        id: 4,
        name: 'Invest',
        icon: <GrMoney />,
        path: '/invest'
    },
    {
        id: 5,
        name: 'Deals and Offers',
        icon: <MdOutlineLocalOffer />,
        path: '/offers'
    },
    {
        id: 6,
        name: 'My Profile',
        icon: <CgProfile />,
        path: '/profile',
    },
]

export const secondRoutes = [
    {
        id: 1,
        name: 'Settings',
        icon: <FiSettings />,
        path: '/settings'
    },
    {
        id: 2,
        name: 'Logout',
        icon: <FiLogOut />,
        path: '/logout'
    },
]