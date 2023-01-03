export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    console.error("cannot store in local storage");
    return;
  }
  const valueToStore =
    typeof value !== "string" ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    console.error("cannot get the value from local storage");
    return;
  }
  return localStorage.getItem(key);
};
