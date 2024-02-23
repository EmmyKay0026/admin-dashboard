import { Product, User } from "./model";
import { connectToDB } from "./util";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();

    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("error fetching users");
  }
};

export const fetchUser = async (_id) => {
  try {
    connectToDB();

    const user = await User.findById(_id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching user");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();

    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("error fetching products");
  }
};

export const fetchProduct = async (_id) => {
  try {
    connectToDB();

    const product = await Product.findById(_id);

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("error fetching product");
  }
};

// export const tryDB = async () => {
//   try {
//     connectToDB();
//     const testValues = await Product.find();
//     console.log("I got here");

//     console.log(testValues);
//   } catch (err) {
//     console.log(err);
//   }
// };
