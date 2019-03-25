'use strict';

/**
 * Patrol.js controller
 *
 * @description: A set of functions called "actions" for managing `Patrol`.
 */

module.exports = {

  /**
   * Retrieve patrol records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.patrol.search(ctx.query);
    } else {
      return strapi.services.patrol.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a patrol record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.patrol.fetch(ctx.params);
  },

  /**
   * Count patrol records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.patrol.count(ctx.query);
  },

  /**
   * Create a/an patrol record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.patrol.add(ctx.request.body);
  },

  /**
   * Update a/an patrol record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.patrol.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an patrol record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.patrol.remove(ctx.params);
  }
};
