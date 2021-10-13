import PropTypes from 'prop-types'

const Gif = ({ urlImage, titleImage }) => {
    return (
        <>
            <img src={ urlImage } alt={titleImage} className="gif"/>
        </>
    )
}

Gif.propTypes = {
    urlImage: PropTypes.string.isRequired,
}

export default Gif
