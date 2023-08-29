// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// http://localhost:3001/api/getblogs?slug=javascript

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'node:fs';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(400).json({ err: "No such blog found" })
    } else {
      res.status(200).json(JSON.parse(data))
    }
  })
}
