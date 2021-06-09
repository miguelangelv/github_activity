import axios from 'axios';

const urlRepositories = 'http://localhost:5000/repositories';
const urlActivities = 'http://localhost:5000/activities';

export const fetchRepositories = () => axios.get(urlRepositories);
export const createRepository = (newRepository) => axios.post(urlRepositories, newRepository);
export const updateRepository = (id, updatedRepository) => axios.patch(`${urlRepositories}/${id}`, updatedRepository);
export const deleteRepository = (id) => axios.delete(`${urlRepositories}/${id}`);

export const fetchActivities = () => axios.get(urlActivities);
export const createActivity = (newActivity) => axios.post(urlActivities, { collectedActivity: newActivity });
export const updateActivity = (id, updatedActivity) => axios.patch(`${urlActivities}/${id}`, updatedActivity);
export const deleteActivity = (id) => axios.delete(`${urlActivities}/${id}`);
