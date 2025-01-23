const posts = require("../data/postsData");

const validationFound = (req, res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if(!post){
      res.status(404)
      
      return res.json({
        error: "Not Found",
        message: "Post Non Trovato"
      })
    }
    next()
}

module.exports = validationFound