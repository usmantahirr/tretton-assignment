import React from 'react';
import Logger from '../shared/modules/logger';

const defaultHomeContextState = {
  filters: {
    pageNumber: 0,
    pageSize: 12,
    totalRecords: 0,
  },
  updateFilters: (error, show) => {
    Logger.info(error, show);
  },
};

const HomeContext = React.createContext(defaultHomeContextState);

export default HomeContext;
