export const getLocalStorage = (key) => {

  // get localstorage
  let temp = localStorage.getItem(key);

  //如果list物件中有東西 
  return temp ? JSON.parse(temp) : []
};

export const setToLocalStorage = (key, value) => {
  // set value
  return localStorage.setItem(key, JSON.stringify(value))
};