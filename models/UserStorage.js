"use strict"

class UserStorage {
  static #users = {
    id: ["yong", "hun", "young", "yeon", "hyeon"],
    pw: ["1234", "1234", "1234", "1234", "1234"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;