import { useEffect } from 'react';
import css from './Modal.module.css';

import PropTypes from 'prop-types';

const  Modal = ({onClose, url}) => {

 

  useEffect(() => {

 const handleCloseModal = e => {
          if (e.key === 'Escape') {
                
               onClose('');
               
           }
  }

    window.addEventListener('keydown',  handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal)
    }
    
  }, [onClose])

   

   const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose('');
        }
    }


    return <div onClick={handleBackdropClick} className={css.Overlay}>
  <div className={css.Modal}>
    <img src={url} alt="tag" />
  </div>
    </div>
  
    
    
}

Modal.propTypes = {
  onClick: PropTypes.func,
}

export default Modal;