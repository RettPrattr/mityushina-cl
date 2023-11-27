'use strict';

/**
 * fake-info router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fake-info.fake-info');
