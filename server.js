const app = require('./src/app')
const dbConnect = require('./src/models/db')
dbConnect()




app.listen(8000, ()=>{
    console.log("server running")
})


