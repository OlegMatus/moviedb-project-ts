import {useSearchParams} from "react-router-dom";

import {QueryParams} from "../types/queryParamsType";

const useAppQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1', pageSize: '20'});
    const page = query.get('page');
    const pageSize = query.get('pageSize');

    return {
        page,
        pageSize,
        prevPage: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            console.log('HI Prev')
            return prev
        }),
        nextPage: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString());
            console.log('HI Next')
            return prev
        })
    } as QueryParams
}

export {
    useAppQuery
}