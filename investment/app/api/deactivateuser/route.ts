import { User } from '@/models/userModel';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { message: string };

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { id } = req.query;
    const foundUser = await User.findById(id).exec();
    if (!foundUser) {
      return res.status(400).json({ message: 'user not found' });
    }

    res.status(200).json({ message: foundUser });
  } catch (error) {
    console.log(error);
  }
}
