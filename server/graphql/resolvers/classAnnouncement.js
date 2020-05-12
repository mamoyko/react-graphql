import classAnnouncementModel from '../../model/class-announcement.model';

module.exports = {
    classAnnouncement: async () => {
          try {
              const announcement = await classAnnouncementModel.find();
              return announcement;
            } catch (err) {
              throw err;
            }
      },
      addClassAnnouncement: async (args) => {
        const announcement = await classAnnouncementModel.create(args.data)
        return announcement;
      }
}