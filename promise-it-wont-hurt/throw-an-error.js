function parsePromised(json) {
  const promise = new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  })

  return promise;
}

parsePromised(process.argv[2]).then(null, (err) => console.log(err.message))