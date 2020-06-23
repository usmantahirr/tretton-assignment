import React, { useContext, useState, useEffect } from 'react';

import HomePage from '../shared/pages/HomePage';
import ErrorContext from '../shared/modules/error/context';
import { getAllNinjas } from '../service';
import HomeContext from './homeContext';

const defaultFilters = {
  pageNumber: 0,
  pageSize: 12,
};

const HomeContainer = () => {
  const [ninjas, setNinjas] = useState([]);
  const [loading, setLoading] = useState(false);
  const errorContext = useContext(ErrorContext);
  const [filters, setFilters] = useState(defaultFilters);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function fetchNinjas() {
      setLoading(true);
      try {
        const res = await getAllNinjas(filters);
        setNinjas(res.data);
        setFilters((f) => ({
          ...f,
          ...res.pageDetails,
        }));
        setLoading(false);
      } catch (e) {
        setLoading(false);
        errorContext.setError(e, true);
      }
    }

    fetchNinjas();
    // TODO: need to find a way around to pass filters in dependency array.
    // eslint-disable-next-line
  }, [reload, errorContext]);

  function updateFilters(pn) {
    setFilters({
      ...filters,
      pageNumber: pn,
    });
    setReload(reload + 1);
  }

  // add API call etc;
  return (
    <HomeContext.Provider
      value={{
        filters,
        loading,
        updateFilters,
      }}
    >
      <HomePage ninjas={ninjas} />
    </HomeContext.Provider>
  );
};

export default HomeContainer;
