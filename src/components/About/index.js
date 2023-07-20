// Write your JS code here

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="not-found">
      <div className="home">
        <h1 className="pera">About Route</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default About
