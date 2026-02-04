import mongoose from 'mongoose';
const { Schema } = mongoose;


const orgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: String,
  plan: String,
  address: String,
  role:{type:String,default:"super_admin"},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
    index: true,
  },
  createdAt: { type: Date, default: Date.now }
})


export default mongoose.model('Organization', orgSchema);