import IDataCustomer from '../Interface/IDataCustomer';

const dataCustomer: IDataCustomer[] = [
  {
    id: 1,
    name: 'Higor Maranhão Nunes',
    image: 'https://github.com/HigorMN.png',
    phone: '83996445068',
    vehicle: [
      { id: 1, name: 'Fiat Touro 2022' },
      { id: 2, name: 'Citroen C3 2008' },
    ],
  },
];

export default dataCustomer;
