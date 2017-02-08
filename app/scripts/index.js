var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function(){

  var view = new views.PostView();
  // var create = new views.CreatePost();x
  //
  $(document).on('posts:fetch', function(event, posts){
    view.showPosts(posts);

  });


    models.Post.fetch();





  $(document).on('create:post', function(event, data){
      models.Post.create(data);
  });

  });
