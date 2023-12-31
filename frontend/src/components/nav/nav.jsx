import './nav.css';

function Nav() {
    return(
        <nav>
            <ul className='nav-list'>
                <li className='nav-item'><a href='/'>Accueil</a></li>
                <li className='nav-item'><a href='/about'>A propos</a></li>
                <li className='nav-item'><a href='/projects'>Portfolio</a></li>
                <li className='nav-item'>Contact</li>
            </ul>
        </nav>
    )
};

export default Nav;