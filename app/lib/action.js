"use server";

import { revalidatePath } from "next/cache";
import { User, Product } from "./model";
import { connectToDB } from "./util";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPw,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { _id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(_id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(_id);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/users");
};

export const addProducts = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newUser = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProducts = async (formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(_id);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { _id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(_id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }

  revalidatePath("/dashboard/users");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return { error: "Wrong credentials" };
  }
};
