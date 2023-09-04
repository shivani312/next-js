// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'node:fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let data = await fs.promises.readdir("blogdata")
  let allBlogs: any = [];
  let myfile;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs)

}
