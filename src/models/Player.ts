import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  role: { type: String, enum: ['Top', 'Jungle', 'Mid', 'ADC', 'Support'], required: true },
  basePrice: { type: Number, required: true },
  sold: { type: Boolean, default: false },
  soldTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  soldPrice: Number
});

export default mongoose.model('Player', playerSchema);
