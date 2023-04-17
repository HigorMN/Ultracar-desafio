import IDataCustomer from './IDataCustomer';
import IDataPart from './IDataPart';

export default interface IDataService {
  responsibleName: string;
  vehicle: string;
  part?: string | IDataPart;
  description: string;
  startDateTime?: Date;
  endDateTime?: Date | null;
  dataCustomer?: IDataCustomer;
}
