import classModel from '../model/class.model';

const getAllClass = async () => {
    const classData = await classModel.find({})
        .populate('createdBy');
    console.log(classData)
    return classData;
}

const addClass = async (args) => {
    const classData = await classModel.create(args)
    return classData;
}

export {
    getAllClass,
    addClass
}