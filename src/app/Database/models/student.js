// models/studentModel.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  email: {
    type: String,
    required: true,
  }
});

// Define the model if not already created
const studentTable = mongoose.models.students || mongoose.model('students', studentSchema);

// Export the model
export default studentTable;
