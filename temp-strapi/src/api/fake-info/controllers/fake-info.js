'use strict';

/**
 * fake-info controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fake-info.fake-info');
