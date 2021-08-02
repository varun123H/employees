var express = require('express');
var router = express.Router();

router.get('/' ,(req,res) =>{
   res.render("employee/addOrEdit",{
         title : "Insert Data"
   });
});

module.exports = router;