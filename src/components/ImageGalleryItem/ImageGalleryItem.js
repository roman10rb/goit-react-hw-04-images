import css from './ImageGallaryItem.module.css';
import PropTypes from 'prop-types';
export default function ImageGallaryItem({ name, onClick }) {
    
    return (
            
        name.map(({ id, webformatURL, tags, largeImageURL }) =>
            {
            return <li onClick={() => onClick(largeImageURL)}  key={id} className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
                    </li>
            })
            
        )
    
}

ImageGallaryItem.propTypes = {
   name: PropTypes.arrayOf(PropTypes.object),
    onclick: PropTypes.func,
}