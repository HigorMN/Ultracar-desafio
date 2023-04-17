import { Layout } from 'antd';
import AppMenu from '../AppMenu';

import './Header.css';

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="header">
      <div className="header__logo">
        <h1>Ultracar</h1>
      </div>
      <AppMenu />
    </Header>
  );
}
