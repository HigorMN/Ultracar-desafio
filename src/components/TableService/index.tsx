import { useContext, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import IDataService from '../../Interface/IDataService';
import getLocal from '../../utils/localStoragFunc';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import dataPart from '../../mock/dataPart';
import formatDateTime from '../../utils/DateFormat';
import ButtonFinish from '../ButtonFinishService';

const columns: ColumnsType<IDataService> = [
  {
    title: 'Mecânico responsável',
    dataIndex: 'responsibleName',
    key: 'responsibleName',
  },
  {
    title: 'Nome do cliente',
    dataIndex: 'customerName',
    key: 'customerName',
    render: (_, { dataCustomer }) => dataCustomer.name,
  },
  {
    title: 'Veículo',
    dataIndex: 'vehicle',
    key: 'vehicle',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Peça',
    dataIndex: 'part',
    key: 'part',
    render: (_, { part }) =>
      part && dataPart.find(({ id }) => +id === +part)?.name,
  },
  {
    title: 'Data de início',
    dataIndex: 'startDateTime',
    key: 'startDateTime',
    render: (_, { startDateTime }) => formatDateTime(startDateTime),
  },
  {
    title: 'Data de Terminio',
    dataIndex: 'startDateTime',
    key: 'startDateTime',
    render: (_, service) =>
      service.endDateTime ? (
        formatDateTime(service.endDateTime)
      ) : (
        <ButtonFinish service={service} />
      ),
  },
];

export default function TableService() {
  const { setSaveDataService, saveDataService } =
    useContext<IDataContext>(DataContext);

  useEffect(() => {
    const dataService = getLocal('dataService');
    setSaveDataService(dataService);
  }, [setSaveDataService]);

  saveDataService.forEach((column, index) => {
    if (!column.key) {
      column.key = index;
    }
  });

  return <Table columns={columns} dataSource={saveDataService} />;
}
