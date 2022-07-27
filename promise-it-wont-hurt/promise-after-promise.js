const firstPromise = first();

const secondPromise = firstPromise.then((p) => second(p));

secondPromise.then(console.log);