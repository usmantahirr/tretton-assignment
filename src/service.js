import API from './api';
import { NINJAS } from './api/endpoints';
import Logger from './shared/modules/logger';

export async function getAllNinjas(filters) {
  Logger.info('Fetching list of ninjas', filters);
  const api = new API();
  return api.get(NINJAS, undefined, filters).then(
    (res) => res,
    (error) => {
      throw error;
    }
  );
}
