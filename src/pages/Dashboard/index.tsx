import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import AppBreadcrumb from '../../components/AppBreadcrumb';
import ScanQRcode from '../ScanQRcode';
import Services from '../Services';

import './Dashboard.css';

const { Content } = Layout;

export default function Dashboard() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <AppHeader />
      <Content className="site-layout content">
        <AppBreadcrumb />
        {pathname === '/dashboard' && <ScanQRcode />}
        {pathname === '/dashboard/services' && <Services />}
      </Content>
      <AppFooter />
    </Layout>
  );
}
