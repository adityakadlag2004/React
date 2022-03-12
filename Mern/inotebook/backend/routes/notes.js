const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

//ROUTE:1 Fetch All Notes: GET "/api/notes/fetchallnotes".Login Required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

//ROUTE:2 Add Notes: GET "/api/notes/fetchallnotes".Login Required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter valid Title").exists(),
    body("description", "Enter Suitable Description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Enter Valid Parameters");
        return res.status(400).json({ errors: errors.array() });
      } else {
        const note = new Note({
          title,
          description,
          tag,
          user: req.user.id,
        });

        const savedNote = await note.save();
        res.json(savedNote);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE:4 Delete Note: Delete "/api/notes/deletenote".Login Required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    //Find the Note To be Deleted
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.send(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.send("Done");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
});

module.exports = router;
