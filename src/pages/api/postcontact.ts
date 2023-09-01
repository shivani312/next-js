import { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'node:fs';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === "POST") {
        try {
            const data = await fs.promises.readdir('contactdata');

            const fileName = `contactdata/${data.length + 1}.json`;
            await fs.promises.writeFile(fileName, JSON.stringify(req.body));

            res.status(200).json({ message: "Data saved successfully." });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred while saving the data." });
        }
    } else {
        res.status(200).json(['allblogs']);
    }
}
