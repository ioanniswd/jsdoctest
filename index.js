/** description of foo function */
function foo() {
  console.log('foo');
}


/**
 * Book - Makes a book object
 *
 * @constructor
 *
 * @param  {string} title  description
 * @param  {string} author description
 * @return {object} description
 */
function Book(title, author) {
  var obj = {
    title: title,
    author: author
  };
  return obj;
}
