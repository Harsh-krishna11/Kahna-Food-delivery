import mongoose from "mongoose";

export const connectDB = async () => {
   try {
      await mongoose.connect('mongodb+srv://greatstack:246182129@cluster0.4jqe448.mongodb.net/kahna-food-delivery');
      console.log("DB Connected");
   } catch (error) {
      console.error("Error connecting to database:", error);
   }
}