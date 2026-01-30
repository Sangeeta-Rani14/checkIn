import mongoose from 'mongoose';
const { Schema } = mongoose;


const orgSchema = new mongoose.Schema({
  name: String,
  industry: String,
  plan: String,
  address:String,
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
    index: true,
  },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Organization', orgSchema);