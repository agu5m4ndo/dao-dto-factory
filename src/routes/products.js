const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth')

const {
    getAlProducts,
    getOneProduct,
    postProduct,
    deleteProduct
} = require('../controllers/products');

router.route('/').get(auth, getAlProducts).post(postProduct);
router.route('/:id').get(auth, getOneProduct).delete(auth, deleteProduct);

module.exports = router;