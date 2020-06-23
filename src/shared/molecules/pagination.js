import React, { useEffect, useState } from 'react';

const initialState = {
  currentFirstPageNumber: 1,
  currentLastPageNumber: 1,
  currentPageNumber: 1,
  pageSize: 1,
  totalPages: 1,
  totalPagesToDisplay: 5,
};

const Pagination = ({ loading, totalRecords, pageSize, pageNumber, onPageChanged }) => {
  if (pageNumber !== undefined) {
    initialState.currentPageNumber = pageNumber;
  }

  const [pagerState, setPagerState] = useState(initialState);

  useEffect(() => {
    // find total page count;
    let totalPage = pageSize > 0 && totalRecords > 0 ? Math.floor(totalRecords / pageSize) : 0;
    const totalPagesRemainder = pageSize > 0 && totalRecords > 0 ? totalRecords % pageSize : 0;
    const totalPagesCount = totalPagesRemainder > 0 ? totalPage + 1 : totalPage;

    if (pageNumber >= pagerState.currentLastPageNumber && pagerState.currentLastPageNumber !== pagerState.totalPages) {
      setPagerState((prevState) => {
        return {
          ...prevState,
          currentFirstPageNumber: prevState.currentFirstPageNumber + 1,
          currentLastPageNumber: prevState.currentLastPageNumber + 1,
          currentPageNumber: pageNumber,
        };
      });
    } else if (pageNumber === pagerState.currentFirstPageNumber && pagerState.currentFirstPageNumber !== 1) {
      setPagerState((prevState) => {
        return {
          ...prevState,
          currentFirstPageNumber: prevState.currentFirstPageNumber - 1,
          currentLastPageNumber: prevState.currentLastPageNumber - 1,
          currentPageNumber: pageNumber,
        };
      });
    } else {
      setPagerState((ps) => {
        return {
          ...ps,
          currentLastPageNumber: totalPagesCount > 5 ? 5 : totalPagesCount,
          currentPageNumber: pageNumber !== undefined ? pageNumber : 1,
          pageSize,
          totalPages: totalPagesCount,
          totalPagesToDisplay: totalPagesCount > 5 ? 5 : totalPagesCount,
        };
      });
    }

    // TODO: Test this part when we actually use this. because useEffects throw a warning.
    // eslint-disable-next-line
  }, [pageSize, pageNumber, totalRecords]);

  function updatePager(event, currentPage) {
    event.preventDefault();
    onPageChanged(currentPage);
  }

  const paginationItemsArray = new Array(pagerState.totalPagesToDisplay);

  for (
    let i = pagerState.currentFirstPageNumber;
    i < paginationItemsArray.length + pagerState.currentFirstPageNumber;
    i += 1
  ) {
    paginationItemsArray[i - pagerState.currentFirstPageNumber] = i;
  }

  return pagerState.totalPages > 1 ? (
    <div className="pagination">
      <button
        className={`pagination__button ${
          pagerState.currentPageNumber === 1 || loading ? 'pagination__button--disabled' : ''
        }`}
        disabled={pagerState.currentPageNumber === 1 || loading}
        aria-disabled={pagerState.currentPageNumber === 1}
        onClick={(event) => {
          updatePager(event, pagerState.currentPageNumber - 1);
        }}
      >
        Previous
      </button>
      {paginationItemsArray.map((element) => {
        return (
          <button
            className={`pagination__button ${
              element === pagerState.currentPageNumber ? 'pagination__button--active' : ''
            } ${loading ? 'pagination__button--disabled' : ''}`}
            disabled={loading}
            key={element}
            onClick={(event) => {
              updatePager(event, element);
            }}
          >
            {element}
          </button>
        );
      })}
      <button
        className={`pagination__button ${
          pagerState.currentPageNumber === pagerState.totalPages || loading ? 'pagination__button--disabled' : ''
        }`}
        disabled={pagerState.currentPageNumber === pagerState.totalPages || loading}
        onClick={(event) => {
          updatePager(event, pagerState.currentPageNumber + 1);
        }}
      >
        Next
      </button>
    </div>
  ) : (
    <div />
  );
};

export default React.memo(Pagination);
