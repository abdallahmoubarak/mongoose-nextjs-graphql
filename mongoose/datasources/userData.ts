import User from "@/mongoose/models/userModel";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export default class Users extends MongoDataSource<UserDocument> {
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  async createUser({ input }: any) {
    try {
      return await User.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  async updateUser({ input }: any) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        input.id,
        { ...input },
        {
          new: true,
        },
      );
      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  async deleteUser({ id }: { id: string }): Promise<string> {
    try {
      await User.findByIdAndDelete(id);
      return "User deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}
