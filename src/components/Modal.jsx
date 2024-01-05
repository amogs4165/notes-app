import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  title,
  setTitle,
  addNote,
  handleClose,
  open,
  setContent,
  content,
  addTag,
  tagName,
  setTagName,
  tag,
  editNote,
  isTag = false,
  isEdit = false,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isTag ? (
            <TextField
              label="Tag Name"
              variant="outlined"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              fullWidth
              margin="normal"
            />
          ) : (
            <>
              <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                margin="normal"
              />
              {tag.length ? (
                <FormControl sx={{ minWidth: 400, mb: "10px", mt: "10px" }}>
                  <InputLabel id="demo-select-small-label">Tag</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label={"Tag"}
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    size="medium"
                  >
                    {tag.map((item, index) => (
                      <MenuItem key={index} sx={{ fontSize: 14 }} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                ""
              )}
            </>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={isEdit ? editNote : (isTag ? addTag : addNote)}
            fullWidth
          >
            {isEdit ? "Edit Note" : (isTag ? "Add Tag" : "Add Note")}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
