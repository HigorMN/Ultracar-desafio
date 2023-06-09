import IDataCustomer from './IDataCustomer';

export default interface IDataService {
  key?: number;
  responsibleName: string;
  vehicle: string;
  part?: number[];
  description: string;
  startDateTime: Date | null;
  endDateTime?: Date | null;
  dataCustomer: IDataCustomer;
  otherVehicle?: string;
}
