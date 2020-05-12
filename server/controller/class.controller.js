import classModel from '../model/class.model';

const getAllClass = async () => {
    const classData = await classModel.find({});
    console.log(classData,"=====")
    return classData;
}

export {
    getAllClass
}