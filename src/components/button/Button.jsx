import './Button.css';

function Button({width, children, onClick}){
    return(
        <button
            className="button"
            style={{width: width}}
            onClick={() => onClick(children)}
        >
            {children}
        </button>
    )
}
export default Button;