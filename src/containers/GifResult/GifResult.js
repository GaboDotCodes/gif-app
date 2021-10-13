import GifCarrousel from "../GifCarrousel/GifCarrousel"

const GifResult = ({searches, setSearches}) => {
    return (
        <div>
            { searches.map((search) => {
                return <GifCarrousel key={search} carrouselTitle={search} setSearches={setSearches}></GifCarrousel>
            }) }
        </div>
    )
}

export default GifResult
