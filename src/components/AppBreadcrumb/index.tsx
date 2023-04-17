import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import './AppBreadcrumb.css';

export default function AppBreadcrumb() {
  const [routes, setRoutes] = useState<string[]>([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const InitialUpper = parts.map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    });

    setRoutes(InitialUpper);
  }, [pathname]);

  const breadcrumbItems = routes.map((route) => ({ title: route }));

  return <Breadcrumb className="breadcrumb" items={breadcrumbItems} />;
}
