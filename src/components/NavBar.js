import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className='nav'>
            <Link to ='/'>
            <div> Home page</div>
        </Link>
        
        <Link to ='/News'>
                <div> Latest News</div>
        </Link>

    </nav>
    
        )
}

export default NavBar;