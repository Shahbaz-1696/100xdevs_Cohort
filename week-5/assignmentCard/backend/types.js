const zod = require("zod");

const createCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()),
    linkedInUrl: zod.string().url(),
    twitterUrl: zod.string().url(),
});

module.exports = {
    createCard,
}