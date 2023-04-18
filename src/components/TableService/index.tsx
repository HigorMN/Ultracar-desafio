import { useContext, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import IDataService from '../../Interface/IDataService';
import getLocal from '../../utils/localStoragFunc';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
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
    title: 'Data de início',
    dataIndex: 'startDateTime',
    key: 'startDateTime',
    render: (_, { startDateTime }) => formatDateTime(startDateTime),
  },
  {
    title: 'Dados de término',
    dataIndex: 'startDateTime',
    key: 'startDateTime',
    render: (_, service) =>
      service.endDateTime ? (
        formatDateTime(service.endDateTime)
      ) : (
        <ButtonFinish service={service} />
      ),
  },
  {
    title: 'Ação',
    dataIndex: 'action',
    key: 'action',
  },
];

export default function TableService() {
  const { setDataService, dataService, setSaveDataService } =
    useContext<IDataContext>(DataContext);

  useEffect(() => {
    const dataService = JSON.parse(getLocal('dataService') || '[]');
    setDataService(dataService);
    setSaveDataService(dataService);
  }, [setDataService, setSaveDataService]);

  return <Table columns={columns} dataSource={dataService} />;
}
