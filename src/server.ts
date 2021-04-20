import express, { response } from 'express';
import './database';
 
const app = express();


app.get('/', (request, response)=>{
    return response.json({
        "message":"Ola NLW 05!"
    });
  });

  app.post('/', (request, reponse)=>{
    return response.json({
        message:"usuario Salvo com sucesso"
    });
  });


const PORT = 3333;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));



