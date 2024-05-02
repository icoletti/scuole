'use strict';

/**
 * openday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::openday.openday');
