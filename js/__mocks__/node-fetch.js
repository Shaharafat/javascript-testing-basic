const fetch = (url, postObject) => {
  console.log("fetch");
  return {
    json: () => {
      const body = JSON.parse(postObject.body);
      return body;
    },
  };
};

module.exports = fetch;
