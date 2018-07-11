'use strict';

/**
 * Tsstatus.js controller
 *
 * @description: A set of functions called "actions" for managing `Tsstatus`.
 */

module.exports = {

  /**
   * Retrieve tsstatus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tsstatus.search(ctx.query);
    } else {
      return strapi.services.tsstatus.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tsstatus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tsstatus.fetch(ctx.params);
  },

  /**
   * Count tsstatus records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tsstatus.count(ctx.query);
  },

  /**
   * Create a/an tsstatus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tsstatus.add(ctx.request.body);
  },

  /**
   * Update a/an tsstatus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tsstatus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tsstatus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tsstatus.remove(ctx.params);
  },

  /**
   * Add relation to a/an tsstatus record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.tsstatus.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an tsstatus record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.tsstatus.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an tsstatus record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.tsstatus.removeRelation(ctx.params, ctx.request.body);
  }
};
