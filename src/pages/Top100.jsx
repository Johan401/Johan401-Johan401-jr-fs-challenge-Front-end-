import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShortCodeCard from '../components/shortCard';
import "../css/shortCode.css"
import Loader from '../components/loader';
import Pagination from '../components/pagination';

const Top100 = () => {

    // State to store the list of top short codes
    const [topCodes, setTopCodes] = useState([]);
    // State to control the loading state
    const [loading, setLoading] = useState(false);
    // State to keep track of the current page number
    const [currentPage, setCurrentPage] = useState(1);
    // State to define the number of codes per page
    const [codesPerPage] = useState(12);

    // Calculate the index of the last code on the current page
    const indexOfLastCode = currentPage * codesPerPage;
    // Calculate the index of the first code on the current page
    const indexOfFirstCode = indexOfLastCode - codesPerPage;
    // Get the codes for the current page
    const currentCodes = topCodes.slice(indexOfFirstCode, indexOfLastCode);

    useEffect(() => {
        const fetchTopCodes = async () => {
        setLoading(true)
        try {
            const response = await axios.get(
                'http://localhost:3000/top_100_shortcodes'); // Ruta de la API para obtener los top 100 códigos
            setTopCodes(response.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
        };

        fetchTopCodes();

    }, []);
    

  return (
        <div className='container'>
            <div className='tittleContainer'>
                <h1><a href='/'>⇐</a></h1>
                <h1>Top 100 Short Codes</h1>
            </div>
            {loading ? (
                <Loader />
            ) : (
                <>
                        {currentCodes.length > 0 ? (
                            <div className='cardContainer'>
                                {currentCodes.map((item) => (
                                    <ShortCodeCard key={item.short_code} props={item} />
                                ))}
                            </div>
                        ) : (
                            <h2 className='noResults'>No results found</h2>
                        )}

                    <Pagination setCurrentPage={setCurrentPage} topCodes={topCodes} codesPerPage={codesPerPage} setLoading={setLoading}/>
                </>
            )}
        </div>
  )
}

export default Top100