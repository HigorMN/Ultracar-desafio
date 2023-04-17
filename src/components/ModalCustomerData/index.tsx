import { useContext, useState } from 'react';
import { Col, Form, Image, Input, Modal, Row, Select, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { IModalOpen } from '../../Interface/IModalOpen';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import IDataService from '../../Interface/iDataService';
import dataPart from '../../mock/dataPart';
import { useNavigate } from 'react-router-dom';
const { confirm } = Modal;

export default function ModalCustomerData(event: IModalOpen) {
  const { dataCustomer, setDataService, dataService, openMessage } =
    useContext<IDataContext>(DataContext);
  const [part, setPart] = useState(null);
  const { open, setOpen } = event;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (obj: IDataService) => {
    const startDateTime = new Date();
    const endDateTime = null;

    setDataService([
      { ...obj, startDateTime, endDateTime, dataCustomer },
      ...dataService,
    ]);
    openMessage('success', 'Serviço cadastrado');
    setOpen(false);
    navigate('/dashboard/services');
  };

  const showConfirm = () => {
    confirm({
      title: 'Deseja iniciar o serviço?',
      icon: <ExclamationCircleFilled />,
      okButtonProps: { htmlType: 'submit', form: 'formService' },
      async onOk() {
        await onFinish;
      },
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Dados do Cliente"
      open={open}
      onCancel={handleCancel}
      onOk={showConfirm}
      okText="Iniciar serviço"
    >
      <Space direction="vertical" align="center" className="center">
        <Image
          width={100}
          height={100}
          className="image-profile"
          src={dataCustomer.image}
        />
        <h1>{dataCustomer.name}</h1>
      </Space>
      <Form form={form} layout="vertical" onFinish={onFinish} id="formService">
        <h2>Serviço:</h2>
        <Row gutter={10}>
          <Col span={24}>
            <Form.Item
              rules={[{ required: true }]}
              name="responsibleName"
              label="Nome do Responsável"
            >
              <Input placeholder="Seu nome" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              rules={[{ required: true }]}
              name="vehicle"
              label="Veículo"
            >
              <Input
                placeholder={`Ex.: ${
                  !dataCustomer.vehicle
                    ? 'Citroen C3 2008'
                    : dataCustomer.vehicle[0]
                }`}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="part" label="Peça">
              <Select
                value={part}
                onChange={(value) => setPart(value)}
                options={dataPart.map(({ id, name }) => ({
                  value: id,
                  label: name,
                }))}
                allowClear
              />
            </Form.Item>
            {part && (
              <h4>
                Valor da peça: {dataPart.find(({ id }) => id === part)?.price}
              </h4>
            )}
          </Col>
          <Col span={24}>
            <Form.Item
              rules={[{ required: true }]}
              name="description"
              label="Descrição"
            >
              <Input placeholder="Ex.: Troca de óleo" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
