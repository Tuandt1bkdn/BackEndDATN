// const { response } = require("/server.js");
const { response } = require("express");
const database = require("../connectdatabase");
//const connection = require("../connectdatabase")
module.exports = {
  getAllData: function (req, res) {
    var sql = "SELECT * FROM datn.test1";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  getUser: function (req, res) {
    var sql = "SELECT * FROM datn.user";
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
    var sql =
      "SELECT *, t.time as realTime, CONVERT(t.time, DATE) as convertedDate, CONVERT(t.time, TIME) as convertedTime FROM datn.test1 as t GROUP BY t.lng ORDER BY t.time DESC LIMIT 1";
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },

  Login: function (req, res) {
    var sql = `SELECT user.userName, user.Password FROM datn.user WHERE idUser`;
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  Manage: function (req, res) {
    var sql = `SELECT * FROM datn.usermanage`;
    database.query(sql, (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      console.log(response);
      res.json(response);
    });
  },
  FindByUserID: function (req, res) {
    const data = req.params.userId;
    console.log(data);
    var sql = `SELECT * FROM datn.usermanage WHERE usermanage.userId=${data}`;
    database.query(sql, [data, "userId"], (err, response) => {
      if (err) {
        console.log("Khong the lay du lieu");
      }
      res.json(response);
    });
  },
};
