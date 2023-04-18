export default interface IDataCustomer {
  id: number;
  name: string;
  image: string;
  phone: string;
  vehicle?: { id: number; name: string }[];
}
