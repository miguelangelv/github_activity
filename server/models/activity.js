import mongoose from 'mongoose';

const activitySchema = mongoose.Schema({
    collectedActivity: [
        { 
            action: String,
            data: String
        }
    ],
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var Activity = mongoose.model('Activity', activitySchema);

export default Activity;