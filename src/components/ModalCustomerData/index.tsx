import { useContext, useState } from 'react';
import { Col, Form, Image, Input, Modal, Row, Select, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { IModalOpen } from '../../Interface/IModalOpen';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import IDataService from '../../Interface/IDataService';
import dataPart from '../../mock/dataPart';
import { useNavigate } from 'react-router-dom';
import getLocal, { setLocal } from '../../utils/localStoragFunc';
const { confirm } = Modal;

export default function ModalCustomerData(event: IModalOpen) {
  const { dataCustomer, openMessage } = useContext<IDataContext>(DataContext);
  const [part, setPart] = useState<number[]>([]);
  const { open, setOpen } = event;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRegistration = (obj: IDataService): void => {
    const startDateTime: null | Date = null;
    const endDateTime: null | Date = null;
    const dataService: IDataService[] = JSON.parse(
      getLocal('dataService') || '[]'
    );

    setLocal('dataService', [
      {
        key: dataService.length,
        ...obj,
        startDateTime,
        endDateTime,
        dataCustomer,
      },
      ...dataService,
    ]);
    openMessage('success', 'Serviço cadastrado');
    navigate('/dashboard/services');
  };

  const showConfirm = (): void => {
    confirm({
      title: 'Deseja cadastrar o serviço?',
      icon: <ExclamationCircleFilled />,
      okButtonProps: { htmlType: 'submit', form: 'formService' },
      okText: 'Cadastrar e Ir para Lista',
    });
  };

  const handleCancelModal = (): void => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <Modal
      title="Dados do Cliente"
      open={open}
      onCancel={handleCancelModal}
      onOk={showConfirm}
      okText="Cadastrar serviço"
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
      <Form
        form={form}
        layout="vertical"
        onFinish={handleRegistration}
        id="formService"
      >
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
              initialValue={
                dataCustomer.vehicle?.length && dataCustomer.vehicle[0].name
              }
            >
              <Select
                options={dataCustomer.vehicle?.map(({ name }) => ({
                  value: name,
                  label: name,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="part" label="Peça">
              <Select
                mode="multiple"
                value={part}
                onChange={(value) => setPart(value)}
                options={dataPart.map(({ id, name }) => ({
                  value: id,
                  label: name,
                }))}
                allowClear
              />
            </Form.Item>
            {part?.length ? (
              <h4>
                {`Valor da peça(s): ${dataPart
                  .filter((e) => part.includes(e.id))
                  .reduce((acc, curr) => (acc += +curr.price), 0)
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  })}`}
              </h4>
            ) : (
              ''
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
