import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get("/tasks", async (req, res)=>{
    const tasks = await  Task.find();
    console.log(tasks)
    res.send(tasks);
})

router.post("/tasks", async (req, res)=>{
    const {title, description} = req.body;

    const task = new Task({title, description});

    await task.save();

    console.log(task)

    res.json(task);
})

router.get("/tasks/:id", async (req, res)=>{
    
try {
    
    const task = await Task.findById(req.params.id)
    res.send(task);
} catch (error) {
    console.error("task not found")
}
})

router.delete("/tasks/:id", async (req, res)=>{

   try {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.send(task)
   } catch (error) {
    console.error("task  not found")

   }
})

router.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    
        res.json(updatedTask);
    } catch (error) {
        console.error(error)
    }
})

export default router;