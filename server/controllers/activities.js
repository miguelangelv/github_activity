import express from 'express';
import mongoose from 'mongoose';

import Activity from '../models/activity.js';

const router = express.Router();

export const getActivities = async (req, res) => { 
    try {
        const activities = await Activity.find();
                
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getActivity = async (req, res) => { 
    const { id } = req.params;

    try {
        const activity = await Activity.findById(id);
        
        res.status(200).json(activity);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createActivity = async (req, res) => {
    const { collectedActivity } = req.body;

    const newActivity = new Activity({ collectedActivity })

    try {
        await newActivity.save();

        res.status(201).json(newActivity);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateActivity = async (req, res) => {
    const { id } = req.params;
    const { collectedActivity } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No activity with id: ${id}`);

    const updatedActivity = { collectedActivity, _id: id };

    await Activity.findByIdAndUpdate(id, updatedActivity, { new: true });

    res.json(updatedActivity);
}

export const deleteActivity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No activity with id: ${id}`);

    await Activity.findByIdAndRemove(id);

    res.json({ message: "Activity deleted successfully." });
}

export default router;