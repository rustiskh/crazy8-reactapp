import React from 'react';
import ReactPaginate from 'react-paginate';
import PaginationArrowLeft from './PaginationArrowLeft';
import PaginationArrowRight from './PaginationArrowRight';

const Pagination = ({onChangePage}) => {
    return (
      <div className="product-listing__pagination pagination">
        <ReactPaginate
          className="pagination__list"
          pageClassName = "pagination__item"
          pageLinkClassName = "pagination__link"
          breakLabel="..."
          nextLabel={<PaginationArrowRight/>}
          onPageChange={(event) => onChangePage(event.selected+1)}
          pageRangeDisplayed={4}
          pageCount={9}
          previousLabel={<PaginationArrowLeft/>}
          renderOnZeroPageCount={null}
        />
      </div>
      
    );
}


export default Pagination;
