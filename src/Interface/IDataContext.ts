import IDataCustomer from './IDataCustomer';
import IDataService from './IDataService';

export default interface IDataContext {
  dataCustomer: IDataCustomer;
  setDataCustomer: (data: IDataCustomer) => IDataCustomer;
  openMessage: (type: string, message: string) => void;
  dataService: IDataService[];
  setDataService: (data: IDataService[]) => IDataService[];
  saveDataService: IDataService[];
  setSaveDataService: (data: IDataService[]) => IDataService[];
}
