import css from './Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {

  componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModal)
    }


    handleCloseModal = e => {
          if (e.key === 'Escape') {
                
               this.props.onClose('');
               
           }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModal)
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose('');
        }
    }


    

  render() {
    return <div onClick={this.handleBackdropClick} className={css.Overlay}>
  <div className={css.Modal}>
    <img src={this.props.url} alt="tag" />
  </div>
    </div>
  }
    
    
}

Modal.propTypes = {
  onClick: PropTypes.func,
}