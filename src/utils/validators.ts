import { Response } from "express";
import { IScribble } from "models/scribbleModel";

export const validateScribblePost = (res : Response, scribble: IScribble) => {
    if(! scribble.topic){
        res.status(400)
        throw new Error("Topic is required")
    }
    if(! scribble.author){
        res.status(400)
        throw new Error("Author is required")
    }
    if(! scribble.content){
        res.status(400)
        throw new Error("Content is required")
    }
    
    return true

}