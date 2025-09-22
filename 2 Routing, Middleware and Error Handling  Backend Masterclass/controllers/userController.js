let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
  { id: 5, name: "Eve", email: "eve@example.com" },
  { id: 6, name: "Frank", email: "frank@example.com" },
  { id: 7, name: "Grace", email: "grace@example.com" },
  { id: 8, name: "Hannah", email: "hannah@example.com" },
  { id: 9, name: "Ivan", email: "ivan@example.com" },
  { id: 10, name: "Judy", email: "judy@example.com" },
];


// get all users
exports.getAllUsers = (req, res) => {
  res.status(200).json({ users });
}

// get user
exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ user });
}

// create user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json({ user: newUser });
}

// update user
exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users[userIndex] = { id, name, email };
  res.status(200).json({ user: users[userIndex] });
}

// delete user
exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.status(204).json(
    {
      message: "User deleted" ,
      users
    }
  );
}