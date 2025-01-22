const posts = require("../data/postsData");

//index
function index(req, res){
    let postFilterd = posts;
    const { tags } = req.query;

    if (tags) {
      postFilterd = postFilterd.filter((post) =>
        post.tags.includes(req.query.tags)
      )
    }

    res.json(postFilterd);
};

//show
function show(req, res){
  const id = parseInt(req.params.id)
  const post = posts.find(post => post.id === id);
    if(!post){
      res.status(404)
      
      return res.json({
        error: "Not Found",
        message: "Post Non Trovato"
      })
    }
    res.json(post)
  };

//store
function store(req, res){
  res.send("Creazione di un nuovo post");
 };

//update
function update(req, res){
   const postId = req.params.id
      res.send(`Modifica integrale del post ${postId}`);
  };

//modify
function modify(req, res){
   const postId = req.params.id
    res.send(`Modifica parziale del post ${postId}`)
  };

//destroy
function destroy(req, res){
      const id = parseInt(req.params.id);
      const post = posts.find((post) => post.id === id);
      if (!post) {
        res.status(404);

        return res.json({
          error: "Not Found",
          message: "Post Non Trovato",
        });
      }
      posts.splice(posts.indexOf(post), 1)

      res.sendStatus(204)
  };

module.exports = { index, show, store, update, modify, destroy}