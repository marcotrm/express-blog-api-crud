const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')
const validationParamId = require('../middlewares/validationParamId')

router.use(express.json())

// index
  router.get('/', postsController.index)

// show
  router.get('/:id', validationParamId, postsController.show) 

// store
  router.post('/', postsController.store)

// update
  router.put("/:id", validationParamId, postsController.update);

// modify
  router.patch("/:id", validationParamId, postsController.modify);
 
// destroy
  router.delete("/:id", validationParamId, postsController.destroy);

module.exports = router;