/**
 * @name ReactionMarketplace/publicShops
 * @method
 * @memberof Queries/ReactionMarketplace
 * @summary Query the Shops collection for a list of shops
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - Request input
 * @returns {Promise<Object>} Products object Promise
 */
export default async function publicShops(context, args) {
  const { collections } = context;
  const { Shops } = collections;
  
  const query = {
    active: true
  };
  
  return Shops.find(query);
}
