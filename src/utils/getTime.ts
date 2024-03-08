import moment from 'moment';

import { TimeFormat } from '../constants/dateFormat';

export const getTime = (date: Date): string => {
  const formattedTime = moment(date).format(TimeFormat);

  return formattedTime;
};
