import ServiceFilter from '../../components/ServiceFilters';
import ServiceTable from '../../components/ServiceTable';

export default function Services() {
  return (
    <>
      <ServiceFilter />
      <div className="content__body">
        <ServiceTable />
      </div>
    </>
  );
}
