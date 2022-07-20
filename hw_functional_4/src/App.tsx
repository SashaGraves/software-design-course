import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';
import { dataConverter, sortByName, filterByPosts, searchByNameUserCountry } from './helpers';
import type { Image, User, Account, Row } from '../types';

import rows from './mocks/rows.json';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [initialData, setInitialData] = useState<Row[]>(undefined);
  console.log('initialData: ', initialData);
  const [data, setData] = useState<Row[]>(undefined);
  console.log('data: ', data);

  const [sortOrder, setSort] = useState<'asc' | 'desc' | null>(null);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string[]>([]);

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
      const searchedData = searchByNameUserCountry(search, dataArray)
      const filteredData = filterByPosts(filter, searchedData)
      filteredData.sort(sortByName(sortOrder))
      setData(filteredData)
    }
  }, [initialData, sortOrder, search, filter])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters selected={filter} updateSelected={setFilter}/>
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
