import { HELLO } from './test2';

const arr1  = [1, 3, 5];
const arr2 = [...arr1, 6, 7, 8];

export default () => {
  console.log(arr2);
  console.log(arr1);
  console.log(HELLO);
};
