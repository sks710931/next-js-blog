import { months} from '../data/month';

export const parseDate = (datetoParse) => {
  let dateString = '';
  const date = datetoParse.split('T').slice(0, 1)[0].split('-');

  dateString =
    date[2] + ' ' + months[parseInt(date[1]) - 1] + ', ' + date[0];
  return dateString;
};