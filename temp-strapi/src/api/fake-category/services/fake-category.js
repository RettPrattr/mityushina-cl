'use strict';

/**
 * fake-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fake-category.fake-category');
