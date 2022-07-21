import { useState, useEffect, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';
import { dataConverter, sortByName, filterItemByPosts, searchItemByNameUserCountry, composeFuncs, composeValuesToFilters } from './helpers';
import type { Image, User, Account, Row } from '../types';

import rows from './mocks/rows.json';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [initialData, setInitialData] = useState<Row[]>(undefined);
  const [data, setData] = useState<Row[]>(undefined);

  const [sortOrder, setSort] = useState<'asc' | 'desc' | null>(null);
  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState<string[]>([]);


  const funcArgMap = useMemo(() => [
    {
      func: searchItemByNameUserCountry,
      arg: search,
    },
    {
      func: filterItemByPosts,
      arg: filters,
    }
  ], [search, filters])

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) =>
      setInitialData(dataConverter(users, accounts,images))
    );
  }, [])

  useEffect(() => {
    if (initialData) {
      const dataArray = [...initialData]

      // check if all filters and searches has values. if not, do not apply them to filtering
      const funcMap = composeValuesToFilters(funcArgMap)

      // apply and compose all filters and searches
      const resultArray = composeFuncs(dataArray, funcMap)
      resultArray.sort(sortByName(sortOrder))
      setData(resultArray)
    }
  }, [initialData, sortOrder, search, filters, funcArgMap])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters selected={filters} updateSelected={setFilters}/>
            <Sort selected={sortOrder} updateSelected={setSort} />
          </div>
          <Search selected={search} updateSelected={setSearch}/>
        </div>
        <Table rows={data || initialData || mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
