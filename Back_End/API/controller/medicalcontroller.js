// const { response } = require("/server.js");
const { response } = require("express");
const database = require("../connectdatabase");
//const connection = require("../connectdatabase")
module.exports = {
  getAllData: function (req, res) {
    var sql = "SELECT * FROM biqtzwqiihjmw2npadtd.loradata";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  getUser: function (req, res) {
    var sql = "SELECT * FROM biqtzwqiihjmw2npadtd.user";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  getDistance: function (req, res) {
    var sql = "SELECT MAX(test1.time) as 'timemax' FROM datn.test1";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }

      console.log(response);
      res.json(response);
    });
  },
  getRealTime: function (req, res) {
    var sql = `SELECT * FROM biqtzwqiihjmw2npadtd.loradata order by loradata.time desc LIMIT 5`;
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },

  Login: function (req, res) {
    var sql = `SELECT username,password FROM biqtzwqiihjmw2npadtd.user where iduser`;
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  Manage: function (req, res) {
    var sql = `SELECT * FROM biqtzwqiihjmw2npadtd.driver`;
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  FindByUserID: function (req, res) {
    const data = req.params.iddriver;
    console.log(data);
    var sql = `SELECT * FROM biqtzwqiihjmw2npadtd.driver WHERE driver.iddriver=${data}`;
    database.query(sql, [data, "iddriver"], (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      res.json(response);
    });
  },
};
