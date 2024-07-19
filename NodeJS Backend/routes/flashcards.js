const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth');
const Flashcard = require('../models/Flashcard');

// Create a new flashcard
router.post('/', authenticateUser, async (req, res) => {
  const { frontText, backText } = req.body;
  try {
    const flashcard = new Flashcard({
      frontText,
      backText,
      createdBy: req.user.id
    });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all flashcards for the authenticated user
router.get('/', authenticateUser, async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ createdBy: req.user.id });
    res.json(flashcards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});


router.get('/:id', authenticateUser, async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard || flashcard.createdBy.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Flashcard not found' });
    }
    res.json(flashcard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.put('/:id', authenticateUser, async (req, res) => {
  const { frontText, backText } = req.body;
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard || flashcard.createdBy.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Flashcard not found' });
    }

    flashcard.frontText = frontText || flashcard.frontText;
    flashcard.backText = backText || flashcard.backText;
    await flashcard.save();

    res.json(flashcard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.delete('/:id', authenticateUser, async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (!flashcard || flashcard.createdBy.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Flashcard not found' });
    }

    await flashcard.remove();
    res.json({ msg: 'Flashcard removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
