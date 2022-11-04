import React, { useMemo } from "react";
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { useRouter } from 'next/router'
import { routes, secondRoutes } from '../../pages/admin/routes'
import { useStateContext } from '../../context/UserContext'


function SideNavbar() {

  const { activeMenu, setActiveMenu, screenSize, } = useStateContext()
  const Router = useRouter()

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  return (

    <div className="mx-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8 peer-focus:right-0 peer:transition ease-out delay-150 duration-200">
      {activeMenu && (<>
        <div className="flex justify-between items-center ">
          <Link href="/admin">
            <div onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>FundWise</span>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setActiveMenu(
              (prevActiveMenu) => !prevActiveMenu )}
            // style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-4 border-y border-stone-200 dark:border-stone-500">
          {routes.map(({ icon: Icon, ...route }) => {

            return (

              <Link href={`/admin${route.path}`}>
                <div key={route.id} onClick={handleCloseSidebar} className={`flex mb-2 justify-start items-center gap-4 pl-3 
              p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto 
              ${Router.pathname === `/admin${route.path}` ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                  <span key={route.icon} className={`text-2xl
                ${Router.pathname === `/admin${route.path}` ? 'text-stone-50' : 'group-hover:text-white'}`}>
                    {Icon}
                  </span>
                  <h3 key={route.name} className={`text-base font-semibold 
                ${Router.pathname === `/admin${route.path}` ? 'text-stone-50' : 'group-hover:text-white'}`}>
                    {route.name}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="mt-4 pt-8 border-b border-stone-200 dark:border-stone-500">
          {secondRoutes.map(({ icon: Icon, ...route }) => {
            return (
              <Link href={`/admin${route.path}`}>
                <div key={route.id}  className="flex mb-2 justify-start items-center gap-4 pl-3 
              hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <span key={route.icon} className={`text-2xl text-gray-600 
                ${Router.pathname === `/admin${route.path}` ? 'text-white' : 'group-hover:text-white'}`}>
                    {Icon}
                  </span>
                  <h3 key={route.name} className="text-base text-gray-600 group-hover:text-white font-semibold ">
                    {route.name}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </>)}
    </div>
  );
}

export default SideNavbar;
