
import css from './Button.module.css';
import PropTypes from 'prop-types'; 


const Button = () => {

        return (
            
            <button className={css.Button} type="button" onClick={this.props.onClick}>Load more</button>
        )
    
}

Button.protoType = {
  onClick: PropTypes.func,
};
export default Button;
