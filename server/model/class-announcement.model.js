import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const classAnnouncementSchema = new mongoose.Schema({

    announcement: {
        type: String,
        required: 'Please enter a announcement',
    },

    class: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Class"
        }
    ],

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
classAnnouncementSchema.index({
    className: 'text'
});

export default mongoose.model('ClassAnnouncement', classAnnouncementSchema);
