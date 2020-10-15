import { firebaseInstance } from "./firebase";

export const initialize = () => {
  console.log("initlize message");
  firebaseInstance()
    ?.messaging()
    .usePublicVapidKey(
      "BHpIxiOt4QFJy779XSdFvz4DTCgRxns-VrfveKR2gFjm6Tp3qjSl_GlV0BKNpNiOJOCYdUTp3fZlk-ZBep9qCb0"
    );
  // 토큰 가져오고 등록하기
  firebaseInstance()
    ?.messaging()
    .getToken()
    .then((currentToken) => {
      if (currentToken) {
        console.log("currentToken", currentToken);
      } else {
        // Show permission request.
        console.log(
          "No Instance ID token available. Request permission to generate one."
        );
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      //   showToken("Error retrieving Instance ID token. ", err);
      //   setTokenSentToServer(false);
    });

  firebaseInstance()
    ?.messaging()
    .onMessage((payload) => {
      console.log("Message received. ", payload);
    });

};
