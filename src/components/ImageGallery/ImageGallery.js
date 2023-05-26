import PropTypes from 'prop-types';
import ImageGallaryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallary.module.css'


export default function ImageGallary({ names, onClick }) {


        return (

            <div>
                <ul className={css.ImageGallery}>
    
                    <ImageGallaryItem name={names} onClick={onClick} />
                
                </ul>
                 
            </div>
            
            
        )
    }

ImageGallary.protoType = {
    name: PropTypes.arrayOf(PropTypes.object),
    onclick: PropTypes.func,
};