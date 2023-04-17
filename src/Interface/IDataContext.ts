import IDataCustomer from './IDataCustomer';

export default interface IDataContext {
  dataCustomer: IDataCustomer;
  setDataCustomer: (data: IDataCustomer) => IDataCustomer;
  openMessage: (type: string, message: string) => void;
}
