var ghpages = require('gh-pages');
ghpages.publish('_book', function(err) {
  if (err) return console.log(err);
  console.log('Successfully published to github pages')
});
