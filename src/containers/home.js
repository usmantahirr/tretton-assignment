import React, { useContext, useState, useEffect } from 'react';

import Loader from '../shared/atoms/loader';
import HomePage from '../shared/pages/HomePage';
import ErrorContext from '../shared/modules/error/context';
import { getAllNinjas } from '../service';

const defaultFilters = {
  page: 0,
  size: 10,
  length: 0,
};

const HomeContainer = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [ninjas, setNinjas] = useState([]);
  const [loading, setLoading] = useState(false);
  const errorContext = useContext(ErrorContext);

  useEffect(() => {
    async function fetchNinjas() {
      setLoading(true);
      try {
        const res = await getAllNinjas(filters);
        setNinjas(res.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        errorContext.setError(e, true);
      }
    }

    fetchNinjas();
  }, [filters]);

  if (loading) {
    return <Loader />;
  }

  // add API call etc;
  return <HomePage ninjas={ninjas} />;
};

export default HomeContainer;
