import type { Image, User, Account, Row } from '../types';

export const findByProperty = (property: string) => (array: Record<any, any>[], equalsTo: any) => {
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


const filterByProperty = (filterConverter: (filter: string) => Function ) => (filterArray: string[], array: Row[]): Row[] => {
  if (filterArray.length === 0) return array

  const combinedFilterFunc = (item) => {
    const filterResult = filterArray.map(filterConverter).map((func) => func(item))
    return filterResult.some((item) => item)
  }

  const result = array.filter(combinedFilterFunc)
    
  return result
};

export const filterByPosts = filterByProperty(filterConverterForPosts);