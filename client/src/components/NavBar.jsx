import { Link, useLocation } from 'react-router-dom';
import '../App.css'
export default function NavBar() {
  const currentPage = useLocation().pathname;

  const renderCursor = (path) => {

    return currentPage === path && <span className="blinking-cursor"></span>;
  };

  return (

    <nav className='w-fit  flex justify-center items-center z-50'>

      <ul className=" flex flex-row flex-wrap items-center space-x-4 [&_*]:text-gray-200 nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
        Home
          </Link>
        </li>
        <li className="nav-item"><Link to="/login" className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}></Link></li>
        <li className="nav-item"><Link to="/signup" className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}></Link></li>
        <li className="nav-item"><Link to="/charactersheet" className={currentPage === '/charactersheet' ? 'nav-link active' : 'nav-link'}></Link></li>
      </ul>
    </nav>
  )
}
