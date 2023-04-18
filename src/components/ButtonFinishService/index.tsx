import { Button, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import IDataService from '../../Interface/IDataService';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import { setLocal } from '../../utils/localStoragFunc';

const { confirm } = Modal;

export default function ButtonFinishService(props: { service: IDataService }) {
  const { service } = props;
  const { dataService, setDataService, openMessage } =
    useContext<IDataContext>(DataContext);

  const handleClick = () => {
    const data = service;
    const index = dataService.findIndex((item) => item.key === data.key);

    if (index !== -1) {
      dataService[index].endDateTime = new Date();
      setDataService([...dataService]);
      setLocal('dataService', [...dataService]);
      openMessage('success', 'Serviço finalizado');
    }
  };

  const showConfirm = () => {
    confirm({
      title: 'Deseja terminar o serviço?',
      icon: <ExclamationCircleFilled />,
      onOk() {
        handleClick();
      },
    });
  };

  return (
    <Button type="primary" onClick={showConfirm}>
      Finalizar
    </Button>
  );
}
