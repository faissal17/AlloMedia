import PropTypes from 'prop-types';
const FormButton = ({ 
    children,
    className,
    disabled,
    onClick,
 }) => {
    return (
      <div className='form_btn'>
        <button 
            
            onClick={onClick}
            disabled={disabled}    
            className={`
                button-form
                 mx-auto flex  p-3 rounded-md 
                justify-center items-center scale-[.99] hover:scale-100 text-white font-bold bg-primary transition 
                duration-200 ease-in-out hover:bg-red-500 active:bg-red-600 active:scale-[.98]
               ${className}`
            }
            type='submit' >
            {children}
        </button>
      </div>
    )
}
/* Button Default */
const ButtonDefault=({
    children,
    className,
    onClick,
})=>{
    return (
        <button
        style={{
            background: 'linear-gradient(90deg,rgba(255,169,169,1)  0%, rgba(252,71,71,1) 100%)' 
        }}
        onClick={onClick}
        className={`w-[48.5%] scale-100 transition active:scale-[.97]  py-3 
        rounded-lg text-md text-white button__gradient  ${className}`}
        >
            {children}
        </button>
    )
}
  
export {
    FormButton,
    ButtonDefault,
}



FormButton.propTypes = {
    children: PropTypes.any, // You can specify the expected prop types
    className: PropTypes.string,
    disabled: PropTypes.any,
    onClick: PropTypes.func,
};

ButtonDefault.propTypes = {
    children: PropTypes.any, // You can specify the expected prop types
    className: PropTypes.string,
    onClick: PropTypes.func,
};