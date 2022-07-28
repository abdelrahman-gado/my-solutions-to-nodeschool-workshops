

process.stdin.on("data", (buffer) => {
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] === ".".charCodeAt()) {
      buffer[i] = "!".charCodeAt();
    }
  }
  console.log(buffer);
});
