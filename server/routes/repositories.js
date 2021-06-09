import express from 'express';

import { getRepositories, getRepository, createRepository, updateRepository, deleteRepository } from '../controllers/repositories.js';

const router = express.Router();

router.get('/', getRepositories);
router.post('/', createRepository);
router.get('/:id', getRepository);
router.patch('/:id', updateRepository);
router.delete('/:id', deleteRepository);

export default router;