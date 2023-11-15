
import PropTypes from 'prop-types';
const Backgrounds = ({
  src,className
}) => {
  return (
    <div className={`${className}`}>
          <video 
            className=' w-full h-full object-cover'
            src={src} 
            autoPlay 
            loop 
            muted 
    />
    </div>
  )
}



Backgrounds.propTypes = {
  src:PropTypes.any,
  className:PropTypes.string
};

export {
  Backgrounds
}