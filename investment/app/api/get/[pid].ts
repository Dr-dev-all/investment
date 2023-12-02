import type { NextApiResponse, NextApiRequest } from 'next';
import { User } from '@/models/userModel';

type ResponseData = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { pid } = req.query;
    console.log(pid);
    // if (!pid) return res.status(401).json({ message: 'Missing PID' });
    // const foundUser = await User.findById(pid).exec();
    // if (!foundUser) return res.status(401).json({ message: 'User not found' });
    // return res.status(400).json({ message: foundUser });
  } catch (error) {
    console.log(error);
  }
}
