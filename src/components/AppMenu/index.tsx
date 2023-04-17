import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { QrcodeOutlined, WindowsOutlined } from '@ant-design/icons';
import getItem, { MenuItem } from '../../utils/menu';

import './AppMenu.css';

const items: MenuItem[] = [
  getItem('Escanear QRcode', '/dashboard', <QrcodeOutlined />),
  getItem('Serviços', '/dashboard/services', <WindowsOutlined />),
];

export default function AppMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      onClick={(item) => navigate(item.key)}
      items={items}
    />
  );
}
