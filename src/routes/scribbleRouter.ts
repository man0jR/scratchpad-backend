import {Router} from 'express'
import { createScribble } from '../services/scribbleService';
import { validateScribblePost } from '../utils/validators';

export const scribble = Router();

scribble.get('/', (req, res)=>{
    res.status(200).json({'message': 'Get all scribble'})
});

scribble.get('/:scribbleId', (req, res)=> {
    
    res.status(200).json({'message': `Get scribble by id: ${req.params.scribbleId}`})
});

scribble.post('/', async (req,res)=>{
    try{
        if(validateScribblePost(res, req.body)){
            const scribble = await createScribble(req.body)
            res.status(201).json({'message': `New scribble created with Id ${scribble._id}`})
        }
    } catch(err){
        res.status(500)
        throw new Error(err.message)
    }
});

scribble.put('/:scribbleId', (req, res)=>{
    console.log('PUT req.body', req.body);
    res.status(200).json({'message': `Update scribble by id: ${req.params.scribbleId}`})
});

scribble.delete('/:scribbleId', (req, res)=> {
    res.status(200).json({'message': `Delete scribble by id: ${req.params.scribbleId}`});
});