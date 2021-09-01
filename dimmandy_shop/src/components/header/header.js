import './header.css';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
// import logo from '../../images/bluesnap-logo.svg';
// import { ReactComponent as Logo } from '../../assets/Logo-design.svg';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <Logo /> */}
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                SHOP
                </Link>
                <Link className="option" to="/contact">
                CONTACT
                </Link>
                {
                    currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div> : 
                    <Link to='/signin'>SIGN IN</Link>
                }
            </div>

        </div>
       
    );
}

export default Header;