import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const announcementSchema = new mongoose.Schema({

    announcement: {
        type: String,
        required: 'Please enter a announcement',
    },

    createdBy : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    
    created: {
        type : Date,
        default : function(){
            return Date.now();
        }
    }
});

//define our indexes
announcementSchema.index({
    className: 'text'
});

export default mongoose.model('Announcement', announcementSchema);
