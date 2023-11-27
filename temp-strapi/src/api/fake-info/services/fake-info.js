'use strict';

/**
 * fake-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fake-info.fake-info');
