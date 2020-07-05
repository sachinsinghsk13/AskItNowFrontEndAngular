interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Page <T> {
    content: T[];
    empty: boolean;
    first: boolean;
    last:boolean;
    number: number;
    numberOfElements: number;
    pageable: {
        sort: Sort;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    size: number;
    sort:Sort
    totalElements: number;
    totalPages: number;
}
