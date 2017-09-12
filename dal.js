const users = [
  {id: 1, name: "Chad Crabtree", username: "crabtreec", password: "crcc89"},
  {id: 2, name: "Sami Crabtree", username: "s6hanley", password: "sjhc89"},
]

function getUsers() {
  return users;
}

function getUserById(userId) {
  const singleUser = users.find(function (usr) {
    return user.id === number(usr.id);
  })
  console.log(singleUser);
  return singleUser;
}

function getUserByUsername(usrname) {
	const singleUser = users.find(function(usr) {
		return usrname === usr.username
	})
  console.log(singleUser);
	return singleUser;
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  getUserByUsername: getUserByUsername
}
