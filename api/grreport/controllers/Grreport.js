'use strict';

/**
 * Grreport.js controller
 *
 * @description: A set of functions called "actions" for managing `Grreport`.
 */

module.exports = {

  /**
   * Retrieve grreport records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.grreport.fetchAll(ctx.query);
  },

  /**
   * Retrieve a grreport record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.grreport.fetch(ctx.params);
  },

  /**
   * Count grreport records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.grreport.count(ctx.query);
  },

  /**
   * Create a/an grreport record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.grreport.add(ctx.request.body);
  },

  /**
   * Update a/an grreport record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.grreport.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an grreport record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.grreport.remove(ctx.params);
  },

  /**
   * Add relation to a/an grreport record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.grreport.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an grreport record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.grreport.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an grreport record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.grreport.removeRelation(ctx.params, ctx.request.body);
  }
};
