import { Spin } from 'antd';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const routeRedirection = useCallback(() => {
    return navigate('/dashboard');
  }, [navigate]);

  useEffect(() => {
    routeRedirection();
  }, [routeRedirection]);

  return (
    <main className="home">
      <Spin tip="Carregando..." size="large" />
    </main>
  );
}
