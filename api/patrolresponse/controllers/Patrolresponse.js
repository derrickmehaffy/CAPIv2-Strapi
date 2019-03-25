'use strict';

/**
 * Patrolresponse.js controller
 *
 * @description: A set of functions called "actions" for managing `Patrolresponse`.
 */

module.exports = {

  /**
   * Retrieve patrolresponse records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.patrolresponse.search(ctx.query);
    } else {
      return strapi.services.patrolresponse.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a patrolresponse record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.patrolresponse.fetch(ctx.params);
  },

  /**
   * Count patrolresponse records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.patrolresponse.count(ctx.query);
  },

  /**
   * Create a/an patrolresponse record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.patrolresponse.add(ctx.request.body);
  },

  /**
   * Update a/an patrolresponse record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.patrolresponse.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an patrolresponse record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.patrolresponse.remove(ctx.params);
  }
};
