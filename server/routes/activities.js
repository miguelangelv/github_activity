import express from 'express';

import { getActivities, getActivity, createActivity, updateActivity, deleteActivity } from '../controllers/activities.js';

const router = express.Router();

router.get('/', getActivities);
router.post('/', createActivity);
router.get('/:id', getActivity);
router.patch('/:id', updateActivity);
router.delete('/:id', deleteActivity);

export default router;