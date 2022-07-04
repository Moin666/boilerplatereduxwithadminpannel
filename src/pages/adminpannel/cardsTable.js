import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MiTable from "../../components/mitable";
import firebaseMethods from "../../confiq/firebase/firebaseMethods";
import CircularProgress from "@mui/material";
import MiDialogBox from "../../components/midialog";

function CardsTable(props) {
  const column = [
    "S.no",
    "Title",
    "Price",
    "Location",
    "URL",
    "Caption",
    "Id",
    "Actions",
  ];
  const row = ["s.no", "title", "price", "location", "imgUrl", "caption", "id"];
  const nodeName = "cards/";

  const [cardsData, setCardsData] = useState([]);

  const [loader, setLoader] = useState(false);

  const readFirebaseData = () => {
    let data = firebaseMethods.readOperation(nodeName);
    setCardsData(data);
    console.log(cardsData);
  };

  const deleteRecord = (nodeName, id) => {
    let data = firebaseMethods.deleteData(nodeName, `,${id}`);
    data
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });
    readFirebaseData();
  };
  const obj = {
    caption: "ads",
    imgUrl:
      "https://preview.colorlib.com/theme/unwind/images/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp",
    location: "islaab",
    price: "sdfa",
    title: "avain",
  };

  const addDataFirebase = (cardObj) => {
    setOpen(!open)
    const data = firebaseMethods.writeOperation("cards", cardObj);
    console.log("=====>",data)   
    readFirebaseData();
  };

  const [open,setOpen] =useState(false)
  const openDialog = () =>{
    setOpen(!open)
  }

  useEffect(() => {
    readFirebaseData();
  }, []);

  return (
    <div>
      {/* <MiTable tableColumn = {column} nodeName ={nodeName}  editFirebase ={editFirebase} cardObj ={cardObj}  tableRow = {cardsData} deleteRecord ={deleteRecord} handleClose ={handleClose} open ={open} setCardObj ={setCardObj}/> */}
      <Button
        sx={{ marginBottom: "15px" }}
        variant="contained"
        color="success"
        // onClick={addDataFirebase}
        onClick={openDialog}
      >
        Add Data
      </Button>
      <MiTable tableColumn={column} nodeName={nodeName} tableRow={cardsData} deleteRecord ={deleteRecord} />
      <MiDialogBox  open ={open} addDataFirebase ={addDataFirebase}/>
      {/* {loader && <CircularProgress />} */}
    </div>
  );
}

export default CardsTable;
