import React from "react";
import { Grid } from "@mui/material";
import Notes from "./Notes";

const NotesContainer = ({ data, deleteNote, editNote }) => {
  return (
    <Grid container textAlign={"center"}>
      {data.map((note, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          flexDirection="column"
        >
          {" "}
          <Notes
            data={note}
            deleteNote={deleteNote}
            editNote={editNote}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesContainer;
