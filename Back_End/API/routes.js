//const { getData } = require("./controller/medicalcontroller");
const medical_controller = require("./controller/medicalcontroller");

module.exports = function (app) {
  app.route("/alldata").get(medical_controller.getAllData);
  app.route("/manage").get(medical_controller.getUser);
  app.route("/login").get(medical_controller.Login);
  app.route("/data1").get(medical_controller.getDistance);
  app.route("/datanow").get(medical_controller.getRealTime);
  app.route("/usermanage").get(medical_controller.Manage);
  app.route("/usermanage/:iddriver").get(medical_controller.FindByUserID);
  app.route("/saveaddress").get(medical_controller.getSaveAddress);
  app.route("/saveaddress").post(medical_controller.postSaveAddress);
  app.route("/saveaddress/:id").delete(medical_controller.deleteSaveAddress);
};
