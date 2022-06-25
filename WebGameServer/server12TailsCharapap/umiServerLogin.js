const app = require('express');
const dbConnection = require('../serverDatabase');
const bcrypt = require('bcrypt');
module.exports = app => {
   
    app.post('/loginServer' ,( req,res) =>{
       const {userName ,userPass} = req.body;
       console.log(userName , userPass);
     
       dbConnection.execute("SELECT name FROM users WHERE name = ?" , [userName]).
        then(([rows]) => {
            if(rows.length == 1)
            {
                dbConnection.execute("SELECT * FROM users WHERE name = ?" , [userName]).
                then(([rowx]) => {
                bcrypt.compare(userPass , rowx[0].password).then(compare_result => {
                    if(compare_result === true) 
                    {
                        res.send('LoginSuccess');
                    }
                    else 
                    {
                        res.send('LoginFail');
                    }
                }).catch(err =>{
                    if(err) throw err ;
                });
                });
            }
            else
            {
                res.send('LoginFail');
            }

        });
    });

}