/**
 * Project models
 */
var $ = require('jquery');

function Post(){

}

Post.fetch = function(){
  var promise = $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts');

  promise.then(function(posts){
    $(document).trigger('posts:fetch', [posts]);
  });

  return promise;
};

Post.create = function(data) {
   $.ajax({
     method: "POST",
     dataType: "json",
     url: "http://tiny-lasagna-server.herokuapp.com/collections/posts",
     data: data
    }).done(function(){
     Post.fetch();
   });
     };

    //  makePost.then(function(posts){
    //    $(document).trigger('posts:fetch', [posts]);



module.exports = {
  'Post': Post
};
