const express = require('express');
const router = express.Router();
const posts = require('../data/postsData')
const postsController = require('../controllers/postsController')

// index
  router.get('/', postsController.index)

// show
  router.get('/:id', postsController.show) 

// store
  router.post('/', (req, res) => {
   res.send('Creazione di un nuovo post');
  });

// update
  router.put('/:id', postsController.update)

// modify
  router.patch('/:id', postsController.modify)
 
// destroy
  router.delete('/:id', postsController.destroy)

module.exports = router;