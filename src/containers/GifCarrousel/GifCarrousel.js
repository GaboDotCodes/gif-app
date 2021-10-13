import Gif from "../../components/Gif/Gif";
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import getGifs from '../../helpers/getGifs';
import './GifCarrousel.css'

const GifCarrousel = ({ carrouselTitle, setSearches }) => {

    const deleteSearch = () => {
        setSearches((searches) =>  searches.filter((search) => search !== carrouselTitle));
    };

    

    useEffect(() => {
        getGifs({queryTerm: carrouselTitle})
            .then((images) => {
                setImages(images);
            });
        
        const scrollContainer = document.querySelector(".grid");
        
        const wheelEvent = (evt) => {
            evt.preventDefault();
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if((scrollContainer.scrollLeft === 0 && evt.deltaY < 0) || (scrollContainer.scrollLeft === maxScrollLeft && evt.deltaY > 0)) {
                window.scrollTo(window.scrollX,window.scrollY + evt.deltaY)
            } else {
                scrollContainer.scrollLeft += evt.deltaY;
            }
        };
        
        scrollContainer.addEventListener("wheel", wheelEvent);
        return () => {
            scrollContainer.removeEventListener("wheel", wheelEvent);
        }
    }, [carrouselTitle]);

    const [images, setImages] = useState([]);

    return (
        <div className="gif-grid">
            <div className="grid-header">
                <button className="delete-button button" onClick={deleteSearch}>X</button>
                <h1 className="grid-title">{carrouselTitle}</h1>
            </div>
            <div className="grid">
                { images.map(({ idImage, urlImage, titleImage }) => <Gif key={idImage} urlImage={urlImage} titleImage={titleImage}/>)
                }
            </div>
        </div>
    )
}

GifCarrousel.propTypes = {
    carrouselTitle: PropTypes.string.isRequired,
}

export default GifCarrousel
