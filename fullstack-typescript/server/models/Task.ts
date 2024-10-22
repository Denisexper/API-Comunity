import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
     description: {
        type: String,
        required: true,
        trim: true
     },
     done: {
        type: Boolean,
        default: false

     }

},
//para que no nos cree el _v a la hora de guardar una tarea
{
   versionKey: false,

})

export default model('Task', taskSchema);