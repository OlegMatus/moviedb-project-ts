import * as React from 'react';
import {useEffect} from 'react';

import {useAppQuery, useAppState} from "../../hooks";
import {moviesService} from "../../services";
import css from "./MoviesPagination.module.css"

const MoviesPagination = () => {
    const [currentPage, setCurrentPage] = useAppState<number>(1);
    const [totalPages, setTotalPages] = useAppState<number>(1);
    const [isLoading, setLoading] = useAppState<boolean>(false);
    const {page, pageSize, prevPage, nextPage} = useAppQuery();

    useEffect(() => {
        moviesService.getAll(+page, +pageSize).then(({data: {total_pages}}) => {

                const fetchData = async () => {
                    try {
                        setLoading(true);
                        if (currentPage === +page && totalPages) {
                            return;
                        }

                        const response = await moviesService.getAll(+page, +pageSize);
                        setCurrentPage(+page);

                        setTotalPages(response.data.total_pages);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    } finally {
                        setLoading(false);
                    }
                };

                fetchData();

                setCurrentPage(+page)
                setTotalPages(total_pages)
            }
        )
        console.log('useEffect called');

    }, [page, pageSize, setTotalPages, setCurrentPage]);

    return (
        <div className={css.MoviesPagination}>
            <button onClick={prevPage} disabled={currentPage===1 || isLoading}>Prev</button>
            <div style={{width: 30, display: "flex", justifyContent: "center", color: "white"}}><b>{currentPage}</b>
            </div>
            <button onClick={nextPage} disabled={currentPage===totalPages || isLoading}>Next</button>
        </div>
    );
};

export {MoviesPagination};