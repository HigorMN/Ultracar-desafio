import moment from 'moment';

function formatDateTime(data: string | Date) {
  const dataMoment = moment(data).format('DD/MM/YYYY HH:mm:ss');

  return dataMoment;
}

export default formatDateTime;
