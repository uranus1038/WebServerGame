const app = require('express');
module.exports = app => {
   
    app.get('/svMupo1' ,( req,res) =>{
       res.send('ServerOnline');
    });

}