import { useCallback, useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import getLocal, { setLocal } from '../../utils/localStoragFunc';
import DataContext from '.';

function Provider({ children }) {
  const [dataCustomer, setDataCustomer] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [dataService, setDataService] = useState([]);
  const [saveDataService, setSaveDataService] = useState([]);

  useEffect(() => {
    const dataServiceLocal = getLocal('dataService');

    if(!dataServiceLocal || dataServiceLocal === null) {
      return setLocal('dataService', [])
    }
  }, [])

  const openMessage = useCallback(
    (type, message) => {
      messageApi.open({
        type: type,
        content: message,
      });
    },
    [messageApi]
  );

  const value = useMemo(
    () => ({
      dataCustomer,
      setDataCustomer,
      openMessage,
      dataService,
      setDataService,
      saveDataService,
      setSaveDataService
    }),
    [dataCustomer, openMessage, dataService, saveDataService]
  );

  return (
    <DataContext.Provider value={value}>
      {contextHolder}
      {children}
    </DataContext.Provider>
  );
}

export default Provider;