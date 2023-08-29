import { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'node:fs';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === "POST") {

        fs.writeFile('contactdata/1.json', JSON.stringify(req.body), () => { })
        res.status(200).json(req)

    } else {
        res.status(200).json(['allblogs'])
    }
}
