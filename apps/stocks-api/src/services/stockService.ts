const requestTool = require('request');
import { environment } from '../environments/environment';

export const requestStockApiData = (path: string) => {
    const url = `${environment.apiURL}${path}?token=${environment.apiKey}`;
    return new Promise((resolve) => {
      requestTool(url, (error, response, body) => {
        if (response && response.statusCode === 200) {
          console.log('No cache.....')
          resolve(body);
        }
      });
    });
  };