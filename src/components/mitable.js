import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "bootstrap";
import firebaseMethods from "../confiq/firebase/firebaseMethods";
import MiDialogBox from "./midialog";




export default function MiTable({ tableColumn ,tableRow, deleteRecord, handleClose, editFirebase, open, setCardObj, cardObj}) {


  return (
    <TableContainer component={Paper} sx={{ padding: "5px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableColumn.map((item) => (
              <TableCell align="center">
                <Typography variant="h5"> {item}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
          <TableBody>
          { tableRow && tableRow.map((row,index) => (
            <TableRow
              key={row.data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align ="center">
                {index}
              </TableCell>
              <TableCell align="center">{row.data.title}</TableCell>
              <TableCell align="center">{row.data.price}</TableCell>
              <TableCell align="center">{row.data.location}</TableCell>
              <TableCell align="center">{row.data.imgUrl}</TableCell>
              <TableCell align="center">{row.data.caption}</TableCell>
              <TableCell align="center">{row.data.id}</TableCell>
              <TableCell align="center">
                <button type="button" class="btn btn-info" onClick={() => {handleClose(row.data.id)}}>Edit</button>
                <button type="button " class="btn btn-danger my-2" onClick={()=>{deleteRecord("cards/",row.data.id)}} >Del</button>
                <MiDialogBox />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
