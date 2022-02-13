import { atom, selector } from 'recoil';
import axios from 'axios';

export const dummyAtom = atom({
  key: 'dummyState',
  default: '',
});

export const dummySelector = selector({
  key: 'dummySelector',
  get: ({ get }) => {
    const copiedDummyData = get(dummyAtom);
    return `${copiedDummyData}: tHIS has been modified`;
  },
});

export const apiSelector = selector({
  key: 'apiSelector',
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  },
});
