const mongoose = require('mongoose');
const FlashcardSchema = new mongoose.Schema({
  frontText: { type: String, required: true },
  backText: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Flashcard', FlashcardSchema);

// const mongoose = require('mongoose');

// const FlashcardSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     required: true
//   },
//   answer: {
//     type: String,
//     required: true
//   },
//   tags: {
//     type: [String],
//     default: []
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
// });

// FlashcardSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// module.exports = mongoose.model('Flashcard', FlashcardSchema);
