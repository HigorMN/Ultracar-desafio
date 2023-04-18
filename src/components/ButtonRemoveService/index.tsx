import { Button, Modal } from 'antd';
import { DeleteFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import IDataService from '../../Interface/IDataService';
import { setLocal } from '../../utils/localStoragFunc';

const { confirm } = Modal;

export default function ButtonRemoveService(props: { service: IDataService }) {
  const { service } = props;
  const { dataService, setDataService } = useContext<IDataContext>(DataContext);

  const handleDelete = (): void => {
    const removeData = dataService.filter(({ key }) => key !== service.key);
    setDataService(removeData);
    setLocal('dataService', removeData);
  };

  const showConfirm = (): void => {
    confirm({
      title: 'Deseja remover o serviço?',
      icon: <ExclamationCircleFilled />,
      okText: 'Remover',
      okType: 'danger',
      onOk() {
        handleDelete();
      },
    });
  };
  return (
    <Button type="text" onClick={showConfirm}>
      <DeleteFilled style={{ fontSize: '1.3rem', color: '#E34C26' }} />
    </Button>
  );
}
