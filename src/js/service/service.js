import axios from "axios";

export default class API {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  get(endpointType) {
    return this.httpRequest(endpointType);
  }

  async httpRequest(endpointType) {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET",
        url: this.baseUrl,
        params: { query: `*[_type == '${endpointType}']` },
      };

      axios(config)
        .then((response) => {
          console.log("____response____ ", response);
          let obj = {};
          if (response.status === 400) {
            obj = { message: "Something went wrong!", status: false };
            return obj;
          }
          obj = { status: true, result: response.data.result };
          return obj;
        })
        .then((responseJson) => {
          resolve(responseJson);
        })
        .catch((error) => reject(error)); //to catch the errors if any
    });
  }
}
