import type { Image, User, Account, Row } from '../types';

// data converter
const findByProperty = (property: string) => (array: Record<any, any>[], equalsTo: any) => {
  const foundItem = array.find((item) => item[property] === equalsTo)
  return foundItem;
}

const findByUserID = findByProperty('userID');

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  const rows = users.map((user: User) => {
    const account = findByUserID(accounts, user.userID)
    const image = findByUserID(images, user.userID)

    return {...user,
      avatar: image.url,
      lastPayments: account.payments.length,
      posts: account.posts
    }
  });

  return rows;
};

// sort
const sortByProperty = (property: string) => (order: 'asc' | 'desc' | null) => {
  switch (order) {
    case 'asc':
      return (a: Row, b: Row) => {
        if (a[property] < b[property]) return 1;
        if (a[property] > b[property]) return -1;
        return 0;
      }

    case 'desc':
      return (a: Row, b: Row) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
      }

    default:
      return () => 0;
  }
}

export const sortByName = sortByProperty('name');


// filter
const filterConverterForPosts = (filter: string): Function => {
  switch (filter) {
    case 'Without posts':
      return (item) => item.posts === 0;
    
    case 'More than 100 posts':
      return (item) => item.posts > 100;

    default:
      return (item) => true
  }
};


const filterItemByProperty = (filterConverter: (filter: string) => Function ) => (filterArray: string[]) => (item: Row): boolean => {
  if (filterArray.length === 0) return true

  const filterResult = filterArray.map(filterConverter).map((func) => func(item))
  return filterResult.some((res) => res)
};

export const filterItemByPosts = filterItemByProperty(filterConverterForPosts);


// search by country / name / username

const searchItem = (properties: string[]) => (string: string) => (item: Row): boolean => {

  if (string.length === 0) return true

  const substring = string.toLowerCase()

  const arrayOfValues = properties.map(property => item[property].toLowerCase());
  const searchRes = arrayOfValues.map((value: string) => value.includes(substring))
  return searchRes.some((res) => res)
}

export const searchItemByNameUserCountry = searchItem(['name', 'username', 'country'])


// compose results of search and filters

export const composeFuncs = (array: Row[], funcArray: Function[]) => {
  if (funcArray.length === 0) return array

  const newArray = array.filter((item) => {
    const funcRes = funcArray.map((func) => func(item))

    return funcRes.some((res) => res)
  })

  return newArray
}


// compose filter values and funcs

export const composeValuesToFilters = (funcArgMap: {func: Function; arg: any}[]) => {
  
  // if arg is empty => filter/search is not used => we do not use it in calculation 
  const funcArgNewMap = [...funcArgMap].filter(obj => {
    if (!obj.arg || obj.arg.length === 0) return false
    return true
  })

  // create filter funtions for those filters that have args
  const funcMap = funcArgNewMap.map((obj) => obj.func(obj.arg as any))
  return funcMap
}