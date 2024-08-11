import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="container-navbar">
            <div className="logo-navbar">BABY ELEPHANT</div>
            <div className='other-navbar'>
                <Link to='/' className='navbar-ele'>Problems</Link>
                <p>Contest</p>
                <Link to='/playground' className='navbar-ele'>Playground</Link>
            </div>
        </div>
    
    </>
  )
}

export default Navbar