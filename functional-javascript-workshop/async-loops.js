function loadUsers(userIds, load, done) {
  const finish = 0;
  const users = [];
  userIds.forEach((id, index) => {
    load(id, (u) => {
      users[index] = u;
      finish++;
      if (finish === userIds.length) {
        return done(users);
      }
    })
  })
  return users;
}

module.exports = loadUsers;
