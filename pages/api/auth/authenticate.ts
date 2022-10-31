import prisma from "../../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let data = JSON.parse(req.body);

    let result = await prisma.users.findUnique({
        where: {
            login_user: data.username,
            password_user: data.password,
        },
    })
    console.log(result)

    res.status(200)
}

