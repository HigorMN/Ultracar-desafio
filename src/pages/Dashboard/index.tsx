import { Layout } from 'antd';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

import './Dashboard.css';
import AppBreadcrumb from '../../components/AppBreadcrumb';
import ScanQRcode from '../ScanQRcode';

const { Content } = Layout;

export default function Dashboard() {
  return (
    <Layout>
      <AppHeader />
      <Content className="site-layout content">
        <AppBreadcrumb />
        <ScanQRcode />
      </Content>
      <AppFooter />
    </Layout>
  );
}
