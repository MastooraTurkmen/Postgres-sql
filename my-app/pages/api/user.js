import dbConnect from "../../lib/mongodb"
import User from "../../models/User"

export default async function handler(req, res) {
    await dbConnect()

    if (req.method === "GET") {
        const users = await User.find({})
        return res.status(200).json(users)
    }

    if (req.method === "POST") {
        try {
            const { name, email } = req.body
            const newUser = await User.create({ name, email })
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    res.status(405).json({ message: "Method not allowed" })
}


export default async function handlerExample(req, res) {
    const client = await dbConnect();
    const db = client.db("test")
    const users = db.collection("users").find({}).toArray()
    res.json(users)
}