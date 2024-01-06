import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://bullharvest:bullharvest123@cluster0.nqd7zmu.mongodb.net/investdbretryWrites=true&w=majority'
    );
  } catch (error) {
    throw new Error(error);
  }
};
