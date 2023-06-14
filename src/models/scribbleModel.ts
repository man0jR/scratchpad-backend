import mongoose, {Schema} from 'mongoose'

export interface IScribble {
    topic: string,
    author: string,
    description?: string,
    content: string,
    favorite?: boolean,
    tags?: string[],
    createdAt: Date,
    updatedAt?: Date,
}

const scribbleSchema : Schema<IScribble> = new Schema({
    topic : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    description : String,
    content: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    tags : [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

export const Scribble = mongoose.model("Scribble", scribbleSchema)