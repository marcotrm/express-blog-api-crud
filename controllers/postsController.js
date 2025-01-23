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
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tags: req.body.tags,
  };

  posts.push(newPost);

  res.status(201);
  res.json(newPost);
 };

//update
function update(req, res){
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
    if (!post) {
      res.status(404);

      return res.json({
        error: "Not Found",
        message: "Post Non Trovato",
      });
    }
  };

  posts.titolo = req.body.titolo;
  posts.contenuto = req.body.contenuto;
  posts.immagine = req.body.immagine;
  posts.tags = req.body.tags;

  res.json(posts);

//modify
function modify(req, res){
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
      res.status(404);

      return res.json({
        error: "Not Found",
        message: "Post Non Trovato",
      });
    }

    if (req.query.titolo) {
      posts.titolo = req.body.titolo;
    }
    if (req.body.contenuto){
      posts.contenuto = req.body.contenuto
    } 
    if (req.body.immagine){
      post.immagine = req.body.immagine
    }
    if(req.body.tags){
      posts.tags = req.body.tags
    }

    res.json(posts)
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