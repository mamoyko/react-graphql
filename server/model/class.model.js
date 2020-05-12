import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const classSchema = new mongoose.Schema({

    className: {
        type: String,
        required: 'Please enter a classname',
    },

    member: [String],

    created_by : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    
    created: {
        type : Date,
        default : function(){
        return Date.now();
        }
    }
});

//define our indexes
classSchema.index({
    username: 'text'
});

export default mongoose.model('Class', classSchema);
