import Button from "components/Button/Button";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallary from "./ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import ImageFetch from "servise/pixabey-api";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";



const App = () => {

  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [bigImage, setBigImage] = useState('');
  const [error, setError] = useState('');


  //  state = {
  //   name: '',
  //   images: [],
  //   page: 1,
  //    isLoading: false,
  //   showBtn: false,
  //    empty: false,
  //    bigImage: '',
  //   error: '',
  //  }
   

  useEffect(() => {
      
    if (name === '') return;

    setIsLoading(true);
    
              ImageFetch( name, page )
                .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            setEmpty(true);
            toast.info('No images with this name')
            return;
                  }       
                  setImages(prevImages => [...prevImages, ...hits]);
                  setShowBtn(page < Math.ceil(totalHits / 12));
        }).catch(error => setError(error)).finally(() => setIsLoading(false))

  }, [name, page]);
   
  //  componentDidUpdate(prevProps, prevState) {
      
  //    const { page, name } = this.state;
        
  //     if (prevState.name !== name || prevState.page !== page) {
          
  //       this.setState({
  //         isLoading: true,
  //       });
        
        
  //             ImageFetch( name, page )
  //               .then(({ hits, totalHits }) => {
  //         if (hits.length === 0) {
  //           this.setState({ empty: true });
  //           toast.info('No images with this name')
  //           return;
  //         }
  //         this.setState(prevState => ({
  //           images: [...prevState.images, ...hits],
  //           showBtn: page < Math.ceil(totalHits / 12),
  //         }));
  //       })
  //               .catch(error => this.setState({
  //                 error
  //               })).finally(() => this.setState({
  //               isLoading: false,
  //           }))
           
  //     }
    
  //  }
   
  
  const clickImage = (url) => {
     setBigImage(url)
   }
       
         
       
  const handleSubmit = (value) => {
    if (value === name) {
       toast.info('Please write another name')
      return;
     }
     setName(value);
     setImages([]);
     setPage(1);
     setShowBtn(false);
     setEmpty(false);
     setBigImage('');
     setError('');
     setIsLoading(false);
   }

    const  buttonClick = () => {
   
      setPage(page => page + 1);
        
   }
   

    return (
      <>
        {error && toast.error(error)}
        <Searchbar onSubmit={handleSubmit} />
        <ToastContainer autoClose={1000}/>
        {bigImage !== '' && <Modal url={bigImage} onClose={clickImage} />}
        {isLoading && <Loader />}
        <ImageGallary names={images} onClick={clickImage} />
        {showBtn && <Button onClick={buttonClick} /> }
      </>
    
    )
  
};

export default App;