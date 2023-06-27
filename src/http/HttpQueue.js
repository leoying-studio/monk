    let queue = [];
    function createRequester(type, url, params) {
      const promise = new Promise((resolve) => {
            function requester(callback) {
              const xhr = new XMLHttpRequest();
              xhr.open(type, url);
              xhr.addEventListener("load", callback);
              xhr.send();
            }
            queue.push({
              resolve,
              requester
            });
            if (queue.length === 1) {
              consumer();
            }
      });
      return promise;
    }

   function consumer() {
       if (queue.length) {
          const {requester, resolve} = queue[0]
          requester(function(res) {
                const data = JSON.parse(res.target.response)
                resolve({
                  code: "200",
                  data,
                  msg: "ok"
                });
                queue.shift();
                consumer();
          });
       }
    }

    const http = {
      get: function (url, params = {}) {
        const requester = createRequester("GET", url, params);
        return requester;
      },
      post: function(url, params = {}) {
        const requester = createRequester("POST", url, params);
        return requester;
      }
    };

    http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(1, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(2, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(3, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(4, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(5, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(6, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(7, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(8, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(9, res)
      });
      http
      .get("https://petstore3.swagger.io/api/v3/store/inventory")
      .then(function (res) {
        console.log(10, res)
      });
