"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@keystone-6/core");
var access_1 = require("@keystone-6/core/access");
var fields_1 = require("@keystone-6/core/fields");
exports.default = (0, core_1.config)({
    db: {
        // we're using sqlite for the fastest startup experience
        //   for more information on what database might be appropriate for you
        //   see https://keystonejs.com/docs/guides/choosing-a-database#title
        provider: 'sqlite',
        url: "file:".concat(process.cwd(), "/keystone.db"),
        // WARNING: this is only needed for our monorepo examples, dont do this
        prismaClientPath: 'node_modules/myprisma',
    },
    server: {
        port: 4000,
    },
    lists: {
        Post: (0, core_1.list)({
            access: access_1.allowAll,
            fields: {
                name: (0, fields_1.text)(),
                content: (0, fields_1.text)(),
            },
        }),
    },
});
