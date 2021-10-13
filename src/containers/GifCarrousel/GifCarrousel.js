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
            })
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
