/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NextApiRequest, NextApiResponse } from 'next';

import { Post, posts } from '../../model';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Post[]>,
) {
  res.status(200).json(posts);
}
