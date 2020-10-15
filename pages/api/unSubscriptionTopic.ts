import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdminInstance } from "../../libs/firebaseAdmin";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const params = _req.query;
  const { fcmToken, topic } = params;
  console.log("unSubscriptionTopic", params);
  firebaseAdminInstance()
    .messaging()
    .unsubscribeFromTopic(fcmToken, topic as string);
  res.status(200).json({ status: 200 });
};

export default handler;
