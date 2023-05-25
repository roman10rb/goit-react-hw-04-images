import PropTypes from 'prop-types';
import { Component } from "react";
import css from './Searchbar.module.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

  
  
class Searchbar extends Component {

  state = {
    name: '',
  };


  handleChange = (event) => {
    this.setState({
      name: event.currentTarget.value,
    })
  }
  reset = () => {
    this.setState({
      name: '',
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      toast.warning('Please write the message !')
      return
    }

    this.props.onSubmit(this.state.name)
    this.reset();
  }
    
  render() {
    return (
     <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span >Search</span>
    </button>

          <input
            className={css.SearchFormInput}
      onChange={this.handleChange}
            type="text"
            value={this.state.name}
      placeholder="Search images and photos"
    />
        </form>
        <ToastContainer autoClose={1000}/>
</header>
    )
  }
}


export default Searchbar;



Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}
