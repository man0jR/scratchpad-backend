import { IScribble, Scribble } from "../models/scribbleModel";

export const createScribble = async (scribble: IScribble) => {
    const doc = new Scribble(scribble)
    const result = await doc.save()
    return result
}

export const getAllScribblesOfUser = async (author: string) => {
    return await Scribble.find({author: author});
}