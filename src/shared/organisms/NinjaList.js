import React, { useContext } from 'react';
import Ninja from '../molecules/ninja';
import Pagination from '../molecules/pagination';

import HomeContext from '../../containers/homeContext';
import Loader from '../atoms/loader';

const NinjaList = ({ ninjas }) => {
  const { loading, filters, updateFilters } = useContext(HomeContext);
  if ((!loading && !ninjas) || (!loading && ninjas && !ninjas.length)) {
    return <div>No Ninjas Found</div>;
  }

  const rows = [...Array(Math.ceil(ninjas.length / 4))];
  const productRows = rows.map((row, idx) => ninjas.slice(idx * 4, idx * 4 + 4));

  const content = productRows.map((row, idx) => (
    <div className="row" key={idx}>
      {row.map((ninja) => (
        <div key={ninja.email} className="col-1-of-4">
          <Ninja ninja={ninja} />
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      {loading ? <Loader /> : content}
      <Pagination
        loading={loading}
        totalRecords={filters.length}
        pageSize={filters.pageSize}
        pageNumber={filters.pageNumber + 1}
        shouldReset={filters.resetPager}
        onPageChanged={(pn) => updateFilters(pn - 1)}
      />
    </div>
  );
};

export default NinjaList;
