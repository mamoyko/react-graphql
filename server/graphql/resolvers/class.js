import classModel from '../../model/class.model';

module.exports = {
    getClass: async () => {
          try {
              const data = await classModel.find();
              return data;
            } catch (err) {
              throw err;
            }
      },
      addClass: async (args) => {
        const classData = await classModel.create(args.data)
        return classData;
      }
}