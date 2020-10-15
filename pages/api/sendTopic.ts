import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdminInstance } from "../../libs/firebaseAdmin";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const params = _req.query;
  const { topic, message } = params;
  firebaseAdminInstance().messaging().sendToTopic(topic as string, {
    data: {
      message: message as string
    },
  });
  res.status(200).json({ status: 200 });
};

export default handler;
