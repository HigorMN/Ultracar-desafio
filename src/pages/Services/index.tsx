import ServiceFilter from '../../components/ServiceFilters';
import TableService from '../../components/TableService';

export default function Services() {
  return (
    <>
      <ServiceFilter />
      <div className="content__body">
        <TableService />
      </div>
    </>
  );
}
