export interface FooterPagination {
    "paginationCount": number[],
    "handlePageChange": (newCurrentPage: number) => void,
    "currentActivePage": number
}