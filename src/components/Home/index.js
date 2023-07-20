// Write your JS code here

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="not-found">
      <div className="home">
        <h1 className="pera">Home Route</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default Home
