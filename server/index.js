const app = require('./app');
require('./config/database');
app.listen(4000,()=>{
    console.log('server is running at http://localhost:4000');   
})