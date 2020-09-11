import API from "./service";

const baseUrl = "https://b75f36ph.api.sanity.io/v1/data/query/production";

const Api = new API({
  baseUrl: baseUrl,
});

export default Api;
