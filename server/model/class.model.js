import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const classSchema = new mongoose.Schema({

    className: {
        type: String,
        required: 'Please enter a classname',
    },

    member: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Users"
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
classSchema.index({
    className: 'text'
});

export default mongoose.model('Class', classSchema);
