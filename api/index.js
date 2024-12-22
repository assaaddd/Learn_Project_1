import express from 'express';

const app = express();




app.listen(3000 , () => {
    try{
        console.log(`server is running on a port 3000`);
    }catch(err){
        throw new Error(`Error in listen: ${err}`)
    }
})
