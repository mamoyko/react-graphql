import announcementModel from '../../model/announcement.model';

module.exports = {
    announcement: async () => {
          try {
              const announcement = await announcementModel.find();
              return announcement;
            } catch (err) {
              throw err;
            }
      },
      addAnnouncement: async (args) => {
        const announcement = await announcementModel.create(args.data)
        return announcement;
      }
}