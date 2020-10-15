import _ from "lodash";
import * as admin from "firebase-admin";

const serviceAccount = require("../myspace-c3805-firebase-adminsdk-5d4hv-2ec327e3ad.json");

export const firebaseAdminInstance = _.once(() => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://heneiss-wallet-dashboard.firebaseio.com",
  });
  return admin;
});
