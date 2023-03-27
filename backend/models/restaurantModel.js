import mongoose from "mongoose";

const restaurntSchema = mongoose.Schema(
   {
    title: {
        type: String,
        required: [true, "Title is required"],
      },
    tiny_title:{
        type:String,
        required: [true, "Tiny Title is required"],
    },
    dishes: [
      {
       
        img: {
            type: String,
            required: [true, "Image is required"],
          },
          price:{
            type:Number,
            required: [true, "Price is required"],
          },
          dish_tag:{
            type: String,
          }
      }]
    },
      {
        timestamps: true,
      }
);
const Restaurnt = mongoose.model("restaurnt", restaurntSchema);
export default Restaurnt;