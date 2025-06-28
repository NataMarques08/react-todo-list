import './Button.css';

function Button({width, children, background, onClick}){
    return(
        <button
            className="button"
            style={{width: width, background: background}}
            onClick={() => onClick(children)}
        >
            {children}
        </button>
    )
}
export default Button;