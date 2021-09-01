import './cutomButton.css';

const CustomButon = ({children, isGoogleAuth, ...otherProps}) => {
    return ( 
        <button className={`${isGoogleAuth ? 'google-signin' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButon;