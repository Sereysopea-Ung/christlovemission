const express = require('express');

const app = express();

app.use('/resource',express.static(process.cwd()+'/resource'));

app.get('/', function(req,res){
    res.sendFile(process.cwd()+'/index.html');
});


let port = process.env.port||3000;
app.listen(process.env.port||3000, function(){
    console.log('Server is listening on port: '+ port);
})