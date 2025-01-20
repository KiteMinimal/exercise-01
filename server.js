const app = require('./src/app')
const dbConnect = require('./src/db/db')
dbConnect()




app.listen(8000, ()=>{
    console.log("server running")
})


