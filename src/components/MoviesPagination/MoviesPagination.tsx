import React, {useEffect} from 'react';

import {useAppQuery, useAppState} from "../../hooks";
import {moviesService} from "../../services";
import css from "./MoviesPagination.module.css"

const MoviesPagination = () => {
    const [currentPage, setCurrentPage] = useAppState<number>(1);
    const [totalPages, setTotalPages] = useAppState<number>(1);
    const {page, pageSize, prevPage, nextPage} = useAppQuery();

    useEffect(() => {
        moviesService.getAll(+page, +pageSize).then(({data: {total_pages}}) => {
                setCurrentPage(+page)
                setTotalPages(total_pages)
            }
        )
        console.log('useEffect called');

    }, [page, pageSize, setTotalPages, setCurrentPage]);

    return (
        <div className={css.MoviesPagination}>
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <span><b>--</b>{`${currentPage}`}<b>--</b></span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export {MoviesPagination};