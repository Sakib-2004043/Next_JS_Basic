import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  data:{
    type: Buffer,
    required: true,
  },
  contentType:{
    type: String,
    required: true
  }
});

export default mongoose.models.files || mongoose.model("files", fileSchema)