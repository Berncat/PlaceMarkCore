import { v4 } from "uuid";

let users = [];

export const userMemStore = {
  async getAllUsers() {
    return users;
  },

  async addUser(user) {
    user._id = v4();
    users.push(user);
    return user;
  },

  async getUserById(id) {
    return users.find((user) => user._id === id);
  },

  async getUserByEmail(email) {
    return users.find((user) => user.email === email);
  },

  async deleteUserById(id) {
    const index = users.findIndex((user) => user._id === id);
    users.splice(index, 1);
  },

  async deleteAll() {
    users = [];
  },

  async updateUser(user, updatedUser) {
    user.firstName = updatedUser.firstName;
    user.lastName = updatedUser.lastName;
    user.email = updatedUser.email;
    user.password = updatedUser.password;
  },
};
