import express from 'express';
import mongoose from 'mongoose';

import Repository from '../models/repository.js';

const router = express.Router();

export const getRepositories = async (req, res) => {
    try {
        const repositories = await Repository.find();

        res.status(200).json(repositories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRepository = async (req, res) => {
    const { id } = req.params;

    try {
        const repository = await Repository.findById(id);

        res.status(200).json(repository);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRepository = async (req, res) => {
    const {
        fullName,
        description,
        owner,
        languages,
        branches,
        forks,
        stargazers,
        issues,
        tags,
        releases,
        contributors,
        commits,
        pushedAt
    } = req.body;

    const newRepository = new Repository({
        fullName,
        description,
        owner,
        languages,
        branches,
        forks,
        stargazers,
        issues,
        tags,
        releases,
        contributors,
        commits,
        pushedAt
    })

    try {
        await newRepository.save();

        res.status(201).json(newRepository);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateRepository = async (req, res) => {
    const { id } = req.params;
    const {
        fullName,
        description,
        owner,
        languages,
        branches,
        forks,
        stargazers,
        issues,
        tags,
        releases,
        contributors,
        commits,
        pushedAt
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No repository with id: ${id}`);

    const updatedRepository = {
        fullName,
        description,
        owner,
        languages,
        branches,
        forks,
        stargazers,
        issues,
        tags,
        releases,
        contributors,
        commits,
        pushedAt,
        _id: id
    };

    await Repository.findByIdAndUpdate(id, updatedRepository, { new: true });

    res.json(updatedRepository);
}

export const deleteRepository = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No repository with id: ${id}`);

    await Repository.findByIdAndRemove(id);

    res.json({ message: "Repository deleted successfully." });
}

export default router;