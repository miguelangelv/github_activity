
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import repositoryRoutes from './routes/repositories.js';
import activityRoutes from './routes/activities.js';

const app = express();

app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(cors());

app.use('/repositories', repositoryRoutes);
app.use('/activities', activityRoutes);

const CONNECTION_URL = 'mongodb+srv://githubtracking:git12345@cluster0.d6cxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  )
  .catch((error) =>
    console.log(`${error} did not connect`)
  );

mongoose.set('useFindAndModify', false);