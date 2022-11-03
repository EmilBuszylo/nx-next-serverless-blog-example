import React from "react";
import {useRouter} from "next/router";
import {PaginateResult} from "@emer-blog/shared/utils";
import {DEFAULT_PAGE} from "./consts";
import {PaginationButton} from "./PaginationButton";

type PaginationProps = Omit<PaginateResult, 'results'>

export const Pagination: React.FC<PaginationProps> = ({nextPage, previousPage, totalPages}) => {
  const router = useRouter()

  const currentPage = router.query?.page ? Number(router.query.page) : DEFAULT_PAGE
  const startPage = 1

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="flex flex-col items-center py-12">
      <nav className="flex items-center space-x-1">
        <PaginationButton page={previousPage} aria-label="Previous page">
          <svg className="w-3 h-3 inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path>
          </svg>
        </PaginationButton>

        <PaginationButton page={startPage}>{startPage}</PaginationButton>
        {currentPage > 3 && (
          <PaginationButton>...</PaginationButton>
        )}

        {currentPage === totalPages && totalPages > 3 && (
          <PaginationButton page={currentPage - 2}>{currentPage - 2}</PaginationButton>
        )}

        {currentPage > 2 && (
          <PaginationButton page={currentPage - 1}>{currentPage - 1}</PaginationButton>
        )}

        {currentPage !== 1 && currentPage !== totalPages && (
          <PaginationButton page={currentPage}>
            {currentPage}
          </PaginationButton>
        )}

        {currentPage < totalPages - 1 && (
          <PaginationButton page={currentPage + 1}>{currentPage + 1}</PaginationButton>
        )}

        {currentPage === 1 && totalPages > 3 && (
          <PaginationButton page={currentPage + 2}>{currentPage + 2}</PaginationButton>
        )}

        {currentPage < totalPages - 2 && (
          <PaginationButton>...</PaginationButton>
        )}
        {!(currentPage === totalPages && totalPages === 1) && (
          <PaginationButton page={totalPages}>
            {totalPages}
          </PaginationButton>
        )}
        <PaginationButton page={nextPage} aria-label="Next page">
          <svg className="w-3 h-3 inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"></path>
          </svg>
        </PaginationButton>
      </nav>
    </div>
  )
}
