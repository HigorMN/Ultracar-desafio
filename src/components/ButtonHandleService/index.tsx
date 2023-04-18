import { Button, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import IDataService from '../../Interface/IDataService';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import { setLocal } from '../../utils/localStoragFunc';

const { confirm } = Modal;

interface IProps {
  service: IDataService;
  type: 'startDateTime' | 'endDateTime';
}

export default function ButtonHandleService(props: IProps) {
  const { service, type } = props;
  const { dataService, setDataService, openMessage } =
    useContext<IDataContext>(DataContext);

  const handleClick = (): void => {
    const index = dataService.findIndex((item) => item.key === service.key);

    if (index !== -1) {
      dataService[index][type] = new Date();
      setLocal('dataService', [...dataService]);
      setDataService([...dataService]);
      openMessage(
        'success',
        `Serviço ${type === 'startDateTime' ? 'iniciado' : 'finalizado'}`
      );
    }
  };

  const showConfirm = (): void => {
    confirm({
      title: `Deseja ${
        type === 'startDateTime' ? 'iniciar' : 'finalizar'
      } o serviço?`,
      icon: <ExclamationCircleFilled />,
      onOk() {
        handleClick();
      },
    });
  };

  const handleDisabled = (): boolean => {
    if (!service.startDateTime && type === 'endDateTime') return true;
    return false;
  };

  return (
    <Button disabled={handleDisabled()} type="primary" onClick={showConfirm}>
      {type === 'startDateTime' ? 'Iniciar' : 'Finalizar'}
    </Button>
  );
}
