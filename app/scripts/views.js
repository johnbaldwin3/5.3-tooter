/**
 * Project views
 */
var $ = require('jquery');
var template = require('../templates/post.hbs');
var templateCreate = require('../templates/application.hbs');

function PostView(){
  $('body').append('<ul class="posts">');

  $('body').append(templateCreate());

  $('.form-post').on('submit', function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{
      title:$('.title').val()
     ,body:$('.body').val()
     }]);
  });
}

PostView.prototype.showPosts = function(posts){
  console.log(posts);
  $(".posts").html("");
  posts.forEach(function(post){
    console.log($('.posts').length);
    $('.posts').append(template(post));
  });
};

// function CreatePost(){
//
// }


module.exports = {
 'PostView': PostView
};
