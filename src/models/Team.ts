import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credits: { type: Number, default: 1000 },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
});

export default mongoose.model('Team', teamSchema);
