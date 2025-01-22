const posts = require("../data/postsData");

//index
const index = index((req, res) => {
    let postFilterd = posts;
    const { tags } = req.query;

    if (req.query.tags) {
      postFilterd = postFilterd.filter((post) =>
        post.tags.includes(req.query.tags)
      )
    }

    res.json(postFilterd);
});

//show
const show = show((req, res) => {
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
  })

//store
const store = store((req, res) => {
    const postId = req.params.id
      res.send(`Modifica integrale del post ${postId}`);
  });

//modify
const modify = modify((req, res) => {
   const postId = req.params.id
    res.send(`Modifica parziale del post ${postId}`)
  });

//destroy
const destroy = destroy((req, res) => {
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
  });

module.exports = { index, show, update, modify, destroy}