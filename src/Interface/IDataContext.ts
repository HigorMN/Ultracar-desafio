import IDataCustomer from './IDataCustomer';
import IDataService from './iDataService';

export default interface IDataContext {
  dataCustomer: IDataCustomer;
  setDataCustomer: (data: IDataCustomer) => IDataCustomer;
  openMessage: (type: string, message: string) => void;
  dataService: IDataService[];
  setDataService: (data: IDataService[]) => IDataService[];
}
