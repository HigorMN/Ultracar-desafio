import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import IDataContext from '../../Interface/IDataContext';
import { Col, Form, Input, Row } from 'antd';

export default function ServiceFilter() {
  const { setDataService, saveDataService } =
    useContext<IDataContext>(DataContext);

  const resetData = (): void => {
    setDataService(saveDataService);
  };

  const handleSearch = (value: string): void => {
    if (!value) return resetData();
    const lowerCased = value.toLowerCase();

    setDataService(
      saveDataService.filter(({ responsibleName }) =>
        responsibleName.toLowerCase().includes(lowerCased)
      )
    );
  };

  return (
    <Form layout="vertical">
      <Row>
        <Col span={12}>
          <Form.Item label="Mecânico responsável">
            <Input.Search
              placeholder="Ex.: Higor Maranhão"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
