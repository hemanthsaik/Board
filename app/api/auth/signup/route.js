import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { hash } from "bcryptjs";

export const POST = async (req) => {
  const { username, email, password } = req.json();
  try {
    await connectToDB();

    const userExist = await User.findOne({ email: email });
    if (userExist) return new Response("User Already exist", { status: 422 });

    // User.create({ username, email, password: await hash(password, 12) }),
    //   function (err, data) {
    //     if (err) return new Response(JSON.stringify(err), { status: 404 });
    //     return new Response(JSON.stringify(data), { status: 201 });
    //   };
    const newUser = new User({
      username,
      email,
      password: await hash(password, 12),
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {}
};

// console.log(req);
// if (!req) return new Response("Don't have form data..!", { status: 404 });
