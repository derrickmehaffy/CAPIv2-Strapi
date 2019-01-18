'use strict';

/**
 * Journaldata.js controller
 *
 * @description: A set of functions called "actions" for managing `Journaldata`.
 */

module.exports = {

  /**
   * Retrieve journaldata records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.journaldata.search(ctx.query);
    } else {
      return strapi.services.journaldata.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a journaldata record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.journaldata.fetch(ctx.params);
  },

  /**
   * Count journaldata records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.journaldata.count(ctx.query);
  },

  /**
   * Create a/an journaldata record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.journaldata.add(ctx.request.body);
  },

  /**
   * Update a/an journaldata record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.journaldata.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an journaldata record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.journaldata.remove(ctx.params);
  }
};
