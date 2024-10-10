const CartDAO = require('../models/dao/CartDAO');
const Cart = require('../models/Cart'); // Mongoose model

class CartRepository {
  constructor() {
    this.cartDAO = new CartDAO(Cart);
  }

  async getCart(cartId) {
    return await this.cartDAO.getCartById(cartId);
  }

  async addProduct(cartId, product) {
    return await this.cartDAO.addProductToCart(cartId, product);
  }
}

module.exports = CartRepository;