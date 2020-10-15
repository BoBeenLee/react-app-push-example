import _ from "lodash";
import firebase from "firebase/app";
import "firebase/messaging";

import { env } from "./env";

export const isBrowser = typeof window !== "undefined";

export const firebaseInstance = _.once(() => {
  if (!isBrowser) {
    return;
  }
  if (!env.FIREBASE_KEY) {
    return;
  }
  const firebaseConfig = env.FIREBASE_KEY;
  return firebase.initializeApp(firebaseConfig);
});
