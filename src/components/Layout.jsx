import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import BasicModal from "./Modal";
import NotesContainer from "./NotesContainer";
// import DeleteIcon from '@mui/icons-material/Delete';

const Layout = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState([]);
  const [content, setContent] = useState("");
  const [tagName, setTagName] = useState(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [isTag, setIsTag] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const tag = JSON.parse(localStorage.getItem("tag")) || [];
    if (storedNotes?.length) setNotes(storedNotes);
    if (tag?.length) setTag(tag);
  }, []);

  useEffect(() => {
    if (notes.length) localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (tag.length) localStorage.setItem("tag", JSON.stringify(tag));
  }, [tag]);

  const refresh = () => {
    setTitle("");
    setContent("");
    setTagName("");
    setOpen(false);
  }

  const addNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    console.log(tagName, "tagName is here");
    const newNote = { title, tagName, content };
    setNotes([...notes, newNote]);
    refresh();
  };

  const addTag = () => {
    if (tagName.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    setTag([...tag, tagName]);
    setOpen(false);
    setIsTag(false);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const edit = (index) => {
    setContent(notes[index].content);
    setTitle(notes[index].title);
    setTagName(notes[index].tagName);
    setIndex(index)
    setIsEdit(true)
    setOpen(true)
  }

  const editNote = () => {
    const newNote = { title, tagName, content };
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes([...updatedNotes, newNote]);
    refresh();
    setIsEdit(false)
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1>Notes App</h1>
      <BasicModal
        addNote={addNote}
        handleClose={handleClose}
        open={open}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        tag={tag}
        setTagName={setTagName}
        editNote={editNote}
        isEdit={isEdit}
        tagName={tagName}
        addTag={addTag}
        isTag={isTag}
      />
      <Box
        sx={{
          mx: { xs: 2, sm: 4, md: 8, lg: 16, xl: 16 },
        }}
      >
        <Button onClick={() => setOpen(true)}>Create note</Button>
        <Button
          onClick={() => {
            setOpen(true);
            setIsTag(true);
          }}
        >
          Create Tag
        </Button>
        {notes.length ? (
          <NotesContainer
            data={notes}
            deleteNote={deleteNote}
            editNote={edit}
          />
        ) : (
          "Please create a note to display here!"
        )}
      </Box>
    </Grid>
  );
};
export default Layout;
