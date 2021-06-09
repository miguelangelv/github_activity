import mongoose from 'mongoose';

const repositorySchema = mongoose.Schema({
    fullName: String,
    description: String,
    owner: {
        name: String,
        avatarUrl: String
    },
    languages: [String],
    branches: {
        type: Number,
        default: 0
    },
    forks: {
        type: Number,
        default: 0
    },
    stargazers: {
        type: Number,
        default: 0
    },
    issues: {
        type: Number,
        default: 0
    },
    tags: {
        type: Number,
        default: 0
    },
    releases: {
        type: Number,
        default: 0
    },
    contributors: [
        {
            name: String,
            avatarUrl: String,
            contributions: {
                type: Number,
                default: 0
            }
        }
    ],
    commits: [
        {
            sha: String,
            message: String,
            createdAt: {
                type: Date
            },
            author: String
        }
    ],
    pushedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var Repository = mongoose.model('Repository', repositorySchema);

export default Repository;