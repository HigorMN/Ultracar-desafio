import { Menu } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import getItem, { MenuItem } from '../../utils/menu';

import './AppMenu.css';
import { useNavigate } from 'react-router-dom';

const items: MenuItem[] = [
  getItem('Escanear QRcode', '/dashboard', <QrcodeOutlined />),
];

export default function AppMenu() {
  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/dashboard']}
      onClick={(item) => navigate(item.key)}
      items={items}
    />
  );
}
