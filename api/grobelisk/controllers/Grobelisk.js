'use strict';

/**
 * Grobelisk.js controller
 *
 * @description: A set of functions called "actions" for managing `Grobelisk`.
 */

module.exports = {

  /**
   * Retrieve grobelisk records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    ctx.set('Content-Range', await Grobelisk.count());
    if (ctx.query._q) {
      return strapi.services.grobelisk.search(ctx.query);
    } else {
      return strapi.services.grobelisk.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a grobelisk record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.grobelisk.fetch(ctx.params);
  },

  /**
   * Count grobelisk records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.grobelisk.count(ctx.query);
  },

  /**
   * Create a/an grobelisk record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.grobelisk.add(ctx.request.body);
  },

  /**
   * Update a/an grobelisk record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.grobelisk.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an grobelisk record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.grobelisk.remove(ctx.params);
  }
};
