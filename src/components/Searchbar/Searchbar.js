import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

  
  
const Searchbar = ({onSubmit}) => {

  const [name, setName] = useState('')



  const handleChange = (event) => {

    setName(event.currentTarget.value)
    
  };

  const reset = () => {
    setName('')
  };

const  handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      toast.warning('Please write the message !')
      return
    }

   onSubmit(name)
    reset();
  }
    
 
    return (
     <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span >Search</span>
    </button>

          <input
            className={css.SearchFormInput}
      onChange={handleChange}
            type="text"
            value={name}
      placeholder="Search images and photos"
    />
        </form>
        <ToastContainer autoClose={1000}/>
</header>
    )
  
}


export default Searchbar;



Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}
