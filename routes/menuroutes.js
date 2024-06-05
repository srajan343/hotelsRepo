const express = require('express');
const router = express.Router();

const menu = require('./../menu');

router.post('/' , async(req,res)=>{
    try{
        const data = req.body;
        const newmenu = menu(data);
        const response = await newmenu.save();
        console.log("data saved");
        res.status(200).json(response);

    }catch(err){
        res.status(500).json({error: 'Internal server error'});

    }
})


router.get('/' , async(req,res) => {
    try{
        const data = await menu.find();
        console.log("data showed successfully");
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/:Taste' , async(req,res) => {
    try{
      const Taste = req.params.Taste;
      if(Taste == 'sweet' || Taste == 'sour' || Taste == 'spicy'){
        const response = await menu.find({taste: Taste});
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

module.exports = router;