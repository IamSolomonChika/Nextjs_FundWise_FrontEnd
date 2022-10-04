import { UserContext } from '../context/UserContext'
import '../styles/globals.css'
import '../styles/tailwind.css'
// import '../styles/Dashboardindex.css'
// import routes from '../components/userdashboard/routes'

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  )
}

export default MyApp
