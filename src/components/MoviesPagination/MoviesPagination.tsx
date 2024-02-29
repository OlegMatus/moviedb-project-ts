import React, {useEffect} from 'react';

import {useAppQuery, useAppState} from "../../hooks";
import {moviesService} from "../../services";

const MoviesPagination = () => {
    const [currentPage, setCurrentPage] = useAppState<number>(1);
    const [totalPages, setTotalPages] = useAppState<number>(1);
    const {page, prevPage, nextPage} = useAppQuery();

    useEffect(() => {
        moviesService.getAll(+page).then(({data: {total_pages}}) => {
                setCurrentPage(+page)
                setTotalPages(total_pages)
            }
        )
        console.log('useEffect called');

    }, [page, setTotalPages, setCurrentPage]);

    return (
        <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <span>{`Page ${currentPage}`}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export {MoviesPagination};