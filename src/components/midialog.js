import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import MIBUTTON from "./mibutton";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import BTButton from "./btbutton";

const emails = ["username@gmail.com", "user02@gmail.com"];

function MiDialogBox({open, addDataFirebase}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(!open);
  // };

  const [cardObj, setCardObj] = React.useState({});
  console.log(cardObj);
  return (
    <>
      {/* <Button onClick={handleClose}>Open Dialog</Button> */}

      <Dialog open={open} fullWidth>
        <DialogTitle>Cards Data</DialogTitle>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "80%" }}>
            <label for="Title" className="mb-2">
              Title
            </label>
            <BTButton
              type="text"
              placeholder="title"
              value={cardObj.title}
              onChange={(e) => {
                setCardObj({ ...cardObj, title: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <label for="Title" className="mb-2">
              Caption
            </label>
            <BTButton
              type="text"
              placeholder="caption ... "
              value={cardObj.caption}
              onChange={(e) => {
                setCardObj({ ...cardObj, caption: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <label for="Title" className="mb-2">
              Location
            </label>
            <BTButton
              type="text"
              placeholder="location ..."
              value={cardObj.location}
              onChange={(e) => {
                setCardObj({ ...cardObj, location: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <label for="Title" className="mb-2">
              Price
            </label>
            <BTButton
              type="text"
              placeholder="price ..."
              value={cardObj.price}
              onChange={(e) => {
                setCardObj({ ...cardObj, price: e.target.value });
              }}
            />
          </Box>
          <Box sx={{ width: "80%" }}>
            <label for="Title" className="mb-2">
              Image URL
            </label>
            <BTButton
              type="text"
              placeholder="image url ..."
              value={cardObj.imgUrl}
              onChange={(e) => {
                setCardObj({ ...cardObj, imgUrl: e.target.value });
              }}
            />
          </Box>
          <Button onClick={() => {addDataFirebase(cardObj)}}>Send Firebase</Button>
          <Box></Box>
        </Stack>
      </Dialog>
    </>
  );
}

export default MiDialogBox;
