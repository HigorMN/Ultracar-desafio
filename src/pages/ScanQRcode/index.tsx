import { useContext, useState } from 'react';
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, Image, Space } from 'antd';
import ModalCustomerData from '../../components/ModalCustomerData';
import dataCustomer from '../../mock/dataCustomer';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';

import QRcode from '../../images/Github.svg';

export default function ScanQRcode() {
  const { setDataCustomer, openMessage } =
    useContext<IDataContext>(DataContext);
  const [openModalCustomer, setModalCustomer] = useState<boolean>(false);

  const handleQRCodeClick = (): void => {
    setDataCustomer(dataCustomer[0]);
    openMessage('success', 'Cliente encontrado');
    setModalCustomer(true);
  };

  return (
    <div className="content__body">
      <Space align="center" direction="vertical" className="center">
        <Image src={QRcode} />
        <Button onClick={handleQRCodeClick}>
          <QrcodeOutlined /> Escanear
        </Button>
      </Space>
      <ModalCustomerData open={openModalCustomer} setOpen={setModalCustomer} />
    </div>
  );
}
