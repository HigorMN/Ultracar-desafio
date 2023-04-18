import { Button, Descriptions, Image, Modal, Space, Tag } from 'antd';
import { useState } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import IDataService from '../../Interface/IDataService';
import dataPart from '../../mock/dataPart';

export default function ModalDetailService(props: { service: IDataService }) {
  const { service } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button type="text" onClick={() => setOpen(true)}>
        <EyeOutlined style={{ fontSize: '1.3rem', color: '#1677FF' }} />
      </Button>
      <Modal open={open} onCancel={() => setOpen(false)} footer={[]}>
        <Space direction="vertical" align="center" className="center">
          <Image
            width={100}
            height={100}
            className="image-profile"
            src={service.dataCustomer.image}
          />
        </Space>
        <Descriptions
          title="Detalhes do serviço"
          layout="vertical"
          column={2}
          size="middle"
          bordered={true}
        >
          <Descriptions.Item label="Nome do cliente">
            {service.dataCustomer.name}
          </Descriptions.Item>
          <Descriptions.Item label="Telefone do cliente">
            {service.dataCustomer.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Mecânico responsável">
            {service.responsibleName}
          </Descriptions.Item>
          <Descriptions.Item label="Valor total das peças">
            {dataPart
              .filter((e) => service?.part?.includes(e.id))
              .reduce((acc, curr) => (acc += +curr.price), 0)
              .toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
              })}
          </Descriptions.Item>
          <Descriptions.Item label="Peças">
            {dataPart
              .filter(({ id }) => service?.part?.includes(id))
              .map(({ id, name }) => (
                <Tag color="blue" key={id} style={{ marginBottom: '0.5rem' }}>
                  {name}
                </Tag>
              ))}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
