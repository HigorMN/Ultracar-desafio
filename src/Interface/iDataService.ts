import IDataPart from './IDataPart';

export default interface IDataService {
  responsibleName: string;
  vehicle: string;
  part?: string | IDataPart;
  description: string;
}
