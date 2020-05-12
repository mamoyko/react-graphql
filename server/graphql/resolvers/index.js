import userResolver from './users';
import classResolver from './class';
import announcementResolver from './announcement';
import classAnnouncement from './classAnnouncement';

const rootResolver = {
    ...userResolver,
    ...classResolver,
    ...announcementResolver,
    ...classAnnouncement
}

module.exports = rootResolver;