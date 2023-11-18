import PropTypes from 'prop-types';
import logoImg from '../assets/logo-removebg-preview.png'
const Logo = ({className}) => {
  return (
    <div className={`  ${className}`}>
        <img 
            className=' w-14'
            src={logoImg} 
            alt='logo food' 
        />
    </div>
  )
}

Logo.propTypes={
    className:PropTypes.string
}

export {Logo}