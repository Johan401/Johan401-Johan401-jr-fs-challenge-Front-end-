import React from 'react'
import "../css/pagination.css"

const pagination = ({ setCurrentPage, topCodes, codesPerPage, setLoading }) => {

    // Function to change page with a delay
    const handlePageChange = (pageNumber) => {
        // Activate loading state
        setLoading(true);

        // Change page after 2 seconds
        setTimeout(() => {
            setCurrentPage(pageNumber);
            // Deactivate loading state after 2 seconds
            setLoading(false);
        }, 2000);
    };

  return (
        <div className='pagination'>
            {/* Renders a series of buttons for pagination, calculating the number of pages needed
            based on the length of the codes list divided by the number of codes per page.
            Each button has a click handler that calls the handlePageChange function with the corresponding page number. */}
            {[...Array(Math.ceil(topCodes.length / codesPerPage)).keys()].map((pageNumber) => (
                <button key={pageNumber + 1} onClick={() => handlePageChange(pageNumber + 1)}>
                    {pageNumber + 1}
                </button>
            ))}
        </div>
  )
}

export default pagination