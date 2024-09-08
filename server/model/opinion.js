import mongoose from "mongoose";

const opinionSchema = new mongoose.Schema(
  {

    opinion: { type: String, required: true,},
    clientName: { type: String, required: true },
    JobTitle: { type: String, required: true },
    ratings: { type: Number, required: true },
  }, 
  {
    timestamps: true,
  }
);

const Opinions = mongoose.model("Opinions", opinionSchema);
export default Opinions;
