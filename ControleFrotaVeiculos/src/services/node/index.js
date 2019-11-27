import axios from 'axios';

export class Node{
  debug = false;

  constructor() {
    if (global.config.isDebuggingEnabled) {
      GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
    }
    this.debug = global.config.debug;
  }

  rest(metodo, body={}, phplogin=null, filter=true, use_axios = true) {
    return new Promise((resolve, reject) => {
      this.rfc(metodo, body, phplogin, filter, use_axios).then((data) => {
        resolve(data.data);
      }, reject);
    });
  }

  rfc(metodo, body={}, phplogin=null, filter=true, use_axios = true) {
    body.path = metodo;
    if (phplogin) {
      body.uuid = phplogin.uuid;
      body.token = phplogin.token;
      body.extras = phplogin.getExtras();
    }

    if (this.debug) global.log('Certo 3', body);

    let rest = null;

    if (use_axios) {
      rest = this._axios(body, phplogin ? phplogin.getAuthorization() : null);
    } else {
      rest = this._fetch(body, phplogin ? phplogin.getAuthorization() : null);
    }

    return new Promise((resolve, reject) => {
      if (this.debug) global.log(body, phplogin ? phplogin.getAuthorization() : null);

      rest.then(response => {
        this.verifyResponse(response, phplogin, filter, resolve, reject);
      })
        .catch( (error) => {
          if (this.debug) global.log("Node rfc fetch reject 1", error)
          reject({error: 99, error_msg: "Erro ao tentar acessar o servidor, problema com internet!", error_type: "erro_access"});
        });
    });
  }

  verifyResponse(response, phplogin, filter, resolve, reject) {
    if (this.debug) global.log("Este Node rfc fetch", response);
    if (response.hasOwnProperty("data") && response.data.hasOwnProperty("error")) {
      data = response.data;
      if (data.error) {
        if (filter && phplogin) {
          global.phplogin.filterRest(data);
        }
        if (this.debug) global.log("Node rfc fetch reject 3");
        reject(data);
      } else {
        resolve(data);
      }
    } else {
      if (this.debug) global.log("Node rfc fetch reject 2", response);
      reject({error: 99, error_msg: "Erro ao tentar retornar os dados do servidor!", error_type: "erro_get_data"});
    }
  }

  _axios(body, authorization = null, form = false) {
    let link = global.config.basedir + "/rest/v1/rfc";

    let headers = {};

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if(authorization != null) headers['Authorization'] = authorization;

    global.log(headers);

    return axios.post(link, body, {headers});
  }

  _fetch(body, authorization = null, form = false) {
    let link = global.config.basedir + "/acao-receive_upload?json_mode=1";

    let headers = {};

    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    if(authorization != null) headers['Authorization'] = authorization;

    return fetch(link, { method: "POST", body, headers, });
  }
}
