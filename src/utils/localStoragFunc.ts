export const getLocal = (key: string) => {
  const local = localStorage.getItem(key);
  return local;
};

export const setLocal = (key: string, content: string | object): void => {
  if (!getLocal(key) || getLocal(key) === null) {
    localStorage.setItem(
      key,
      typeof content === 'string' ? content : JSON.stringify(content)
    );
  } else {
    localStorage.setItem(
      key,
      typeof content === 'string' ? content : JSON.stringify(content)
    );
  }
};

export default getLocal;
