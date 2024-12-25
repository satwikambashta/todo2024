import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, user: req.user });
    //   const task = new Task({title,description});
    //   await task.save()
    res.status(201).json({ success: true, message: "task added successfully" });
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("INVALID ID", 404));
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({ success: true, message: "task updated" });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ErrorHandler("INVALID ID", 404));
    }
    await task.deleteOne();
    res.status(200).json({ success: true, message: "task deleted" });
  } catch (error) {
    next(error);
  }
};
