import axios from 'axios';
//@ts-ignore
import Cookies from 'js-cookie';

import { API_URL, IS_DEV } from './constants';
import { removeParamsIfNull } from './utils';

interface HeaderResult {
  url: string;
  headers: {
    ssid: string | null;
    'Content-Type': string;
    'X-Developed-By': string;
  };
}

const header = async ({
  method,
  path,
  withFiles
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  withFiles?: boolean;
}): Promise<HeaderResult> => {
  const options: any = {
    method
  };

  const apiUrl = IS_DEV ? 'http://undertake.sorfin.com.co' : API_URL;

  let ssId = Cookies.get('ssid');
  options.url = `${apiUrl}${removeParamsIfNull(path)}`;

  options.headers = {
    Authorization: `Bearer ${ssId}`,
    'X-Developed-By': 'Miguel Vega | (atleugim)'
  };
  if (!withFiles) {
    options.headers['Content-Type'] = 'application/json';
  }

  return options;
};

export const call = async ({
  method,
  path,
  data = null,
  withFiles = false
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  data?: any;
  withFiles?: boolean;
}) => {
  const logPath = removeParamsIfNull(path);
  try {
    const options = await header({ method, path, withFiles });
    console.info(`REQUEST: ${logPath} | STATUS: pending`);

    // Realiza la solicitud con axios
    const response = await axios({
      ...options,
      data: withFiles ? data : data ? JSON.stringify(data) : null
    });

    console.info(`REQUEST: ${logPath} | STATUS: completed`);
    return response.data;
  } catch (err) {
    console.error(`REQUEST: PATH: ${logPath} | STATUS: error`);
    console.error(err);
    throw err;
  }
};
