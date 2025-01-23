const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')
const validationParamId = require('../middlewares/validationParamId')
const validationFound = require('../middlewares/validationFound')

// index
  router.get('/', postsController.index)

// show
  router.get('/:id', validationFound, validationParamId, postsController.show) 

// store
  router.post('/', validationFound, validationParamId, postsController.store)

// update
  router.put("/:id", validationFound, validationParamId, postsController.update);

// modify
  router.patch("/:id", validationFound, validationParamId, postsController.modify);
 
// destroy
  router.delete("/:id", validationFound, validationParamId, postsController.destroy);

module.exports = router;