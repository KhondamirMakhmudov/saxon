import { MongoClient } from "mongodb";
import { comment } from "postcss";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const userName = req.body.name;
    const userMessage = req.body.message;

    if (
      !userEmail ||
      !userEmail.includes("@") ||
      !userName ||
      !userName.trim("")
    ) {
      res.status(422).json({ message: "Invalid name or email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://khondamir:Vxu8evYatLCkUtod@cluster0.6fbbcqy.mongodb.net/contact?retryWrites=true&w=majority&appName=Cluster0",
    );

    const db = client.db();

    const user = {
      email: userEmail,
      name: userName,
      message: userMessage,
    };

    await db.collection("contact").insertOne(user);

    client.close();

    console.log(userMessage, userName, userEmail);

    res.status(201).json({
      message: " Name, Email, Message sent successfully! ",
      comment: user,
    });
  }
}

export default handler;
