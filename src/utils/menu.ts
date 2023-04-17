import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    label,
    key,
    icon,
  } as MenuItem;
}

export default getItem;
