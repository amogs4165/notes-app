import React from "react";
import { Paper, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Notes = ({ data, deleteNote, editNote, index }) => {
    const delteThisNote = () => {
        deleteNote(index)
    }
    const editThisNote = () => {
        editNote(index)
    }
  return (
    <Grid container>
      <Paper
        sx={{
          padding: "16px",
          minHeight: "80px",
          mx: "5px",
          width: 200,
          marginTop: 1,
        }}
      >
        <Grid container justifyContent="flex-start" flexDirection="column">
          <Grid item textAlign="left">
            <Typography
              sx={{ color: "red", wordWrap: "break-word" }}
              variant="subtitle1"
            >
              {data.title}
            </Typography>
            {data.tagName && (
              <Typography
                style={{
                  backgroundColor: "yellow",
                  display: "inline-block",
                  wordWrap: "break-word",
                }}
                variant="body2"
              >
                {data.tagName}
              </Typography>
            )}
            <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
              {data.content}
            </Typography>
            <Grid
              container
              justifyContent="flex-end"
              alignItems="center"
              marginTop={1}
            >
              <IconButton onClick={editThisNote}>
                <ModeEditIcon sx={{fontSize: 15}}/>
              </IconButton>
              <IconButton onClick={delteThisNote}>
                <DeleteIcon sx={{fontSize: 15}}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Notes;
