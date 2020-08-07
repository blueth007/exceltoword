const express = require("express")
const download= express.Router();
const path =require("path");
download.get("/",(req,res)=>{
    const filePath =path.join(process.cwd(),'public','download','template.xlsx')
    res.download(filePath)
});

module.exports=download
