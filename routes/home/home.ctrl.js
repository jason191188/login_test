'use strict';

const User = require("../../models/User");

const output = {
  hello: (req, res) => {
    res.render('home/index');
  },
  
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: async(req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
};



module.exports = {
  output,
  process,
};