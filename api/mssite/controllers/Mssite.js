'use strict';

/**
 * Mssite.js controller
 *
 * @description: A set of functions called "actions" for managing `Mssite`.
 */

module.exports = {

  /**
   * Retrieve mssite records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mssite.search(ctx.query);
    } else {
      return strapi.services.mssite.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mssite record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.mssite.fetch(ctx.params);
  },

  /**
   * Count mssite records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mssite.count(ctx.query);
  },

  /**
   * Create a/an mssite record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mssite.add(ctx.request.body);
  },

  /**
   * Update a/an mssite record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mssite.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mssite record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mssite.remove(ctx.params);
  }
};
