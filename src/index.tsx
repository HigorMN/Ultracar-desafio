import { createRoot } from 'react-dom/client';
import App from './App';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import 'antd/dist/reset.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <ConfigProvider locale={ptBR}>
    <App />
  </ConfigProvider>
);
