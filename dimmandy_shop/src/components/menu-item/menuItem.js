import './menuItem.css';
import { withRouter } from 'react-router-dom';
//withRouter is an higehr order component which is a function that takes a component as an argument and returns a modified component.

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <div className="menu-item" onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem); //by doing this, we now have access to a super powered menuitem component such that we will now have access to location, match and history props. 