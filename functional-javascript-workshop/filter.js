function getShortMessages(messages) {
  return messages
    .filter((messObj) => messObj.message.length < 50)
    .map((messObj) => messObj.message);
}

module.exports = getShortMessages;
