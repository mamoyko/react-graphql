import userResolver from './users';
import classResolver from './class';

const rootResolver = {
    ...userResolver,
    ...classResolver
}

module.exports = rootResolver;