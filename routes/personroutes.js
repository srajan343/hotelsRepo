const express = require('express');
const router = express.Router();


const person = require('./../person');

router.post('/', async(req,res) => {
    try{
      const data = req.body // req body contain person data
  
      const newPerson = new person(data);
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  
  })
  
  //get method to get the person
  router.get('/', async(req,res) => {
    try{
      const data = await person.find();
      console.log('data fetched');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  
  router.get('/:workType' , async(req,res) => {
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await person.find({work: workType});
        console.log('data fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Invalid work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
    })

    //for updation of documents we use put
    router.put('/:id', async(req,res) => {
      try{
        const personid = req.params.id;
        const updatedata = req.body;

        const response = await person.findByIdAndUpdate(personid,updatedata,{
          new: true, // return the updated document 
          runValidators: true // run mongoose validation
        })

        if(!response){
          return res.status(404).json({error : 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);

      }catch(err){
          console.log(err);
          res.status(500).json({error : 'internal server error'});
      }
    })

    router.delete('/:id' , async(req,res) =>{
      try{
        const personid = req.params.id;
        const response = await person.findByIdAndDelete(personid);
        if(!response){
          return res.status(404).json({error : 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'person deleted'});

      }catch{
        console.log(err);
        res.status(500).json({error : 'internal server error'});

      }
    })
    //creating comment for git
    module.exports = router;