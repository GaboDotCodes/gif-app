import { useState } from "react"
import Footer from "./components/Footer/Footer"
import GifResult from "./containers/GifResult/GifResult"
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import './GifApp.css'

const GifApp = () => {
    const [searches, setSearches] = useState([]);
    return (
        <div className="app">
            <Header></Header>
            <SearchBar setSearches={setSearches}></SearchBar>
            <GifResult searches={searches} setSearches={setSearches}></GifResult>
            <Footer></Footer>
        </div>
    )
}

export default GifApp
