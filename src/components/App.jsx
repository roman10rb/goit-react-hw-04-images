import Button from "components/Button/Button";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallary from "./ImageGallery/ImageGallery";
import { Component } from "react";
import ImageFetch from "servise/pixabey-api";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";



 class App extends Component  {

   state = {
    name: '',
    images: [],
    page: 1,
     isLoading: false,
    showBtn: false,
     empty: false,
     bigImage: '',
    error: '',
   }
   

   
   componentDidUpdate(prevProps, prevState) {
      
     const { page, name } = this.state;
        
      if (prevState.name !== name || prevState.page !== page) {
          
        this.setState({
          isLoading: true,
        });
        
        
              ImageFetch( name, page )
                .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            this.setState({ empty: true });
            toast.info('No images with this name')
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
                .catch(error => this.setState({
                  error
                })).finally(() => this.setState({
                isLoading: false,
            }))
           
      }
    
   }
   


   clickImage = (url) => {
     this.setState({
       bigImage: url,
     })
   }
       
         
       
    handleSubmit = (name) => {
     this.setState({
    name,
    images: [],
    page: 1,
       showBtn: false,
       empty: false,
       bigImage: '',
       error: '',
       isLoading: false,
     })
   }

      buttonClick = () => {
        this.setState(prevState => ({
          page: prevState.page + 1,
        }))
        
   }
   
  
   
  
  

   render() {
    
     const { error, isLoading, bigImage, images, showBtn } = this.state;
     
    return (
      <>
        {error && toast.error(error)}
        <Searchbar onSubmit={this.handleSubmit} />
        
        <ToastContainer autoClose={1000}/>
        {bigImage !== '' && <Modal url={bigImage} onClose={this.clickImage} />}
        {isLoading && <Loader />}
        <ImageGallary name={images} onClick={this.clickImage} />
        {showBtn && <Button onClick={this.buttonClick} /> }
      </>
    
    )
  }
};

export default App;