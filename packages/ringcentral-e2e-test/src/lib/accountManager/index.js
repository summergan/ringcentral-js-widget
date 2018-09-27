import request from 'request';

const BASE_URL = 'http://10.32.36.75:7789/env/xmnup/account/';

class AccountHelper {
  constructor({ baseUrl = BASE_URL }) {
    this._baseUrl = baseUrl;
  }

  baseReq(method, path, param) {
    const options = {
      headers: {
        charset: 'UTF-8'
      },
      url: `${this._baseUrl}${path}/${param}`,
      method,
      json: true
    };
    return new Promise((resolve, reject) => (request(options, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    })));
  }

  async getAccount(scenarioTag) {
    const response = await this.baseReq('GET', 'tag', scenarioTag);
    return response;
  }

  async getAccountByUUid(uuid) {
    const response = await this.baseReq('GET', 'id', uuid);
    return response;
  }

  async lockAccount(uuid) {
    const response = await this.baseReq('PUT', 'occupy', uuid);
    return response;
  }

  async recycleAccount(uuid) {
    const response = await this.baseReq('PUT', 'recycle', uuid);
    return response;
  }
}

export default new AccountHelper();