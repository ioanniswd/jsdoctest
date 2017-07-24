/** Description of foo function */
function foo() {
  console.log('foo');
}


/**
 * bar - Testing variables
 *
 * @param  {int} one ichi
 * @param  {int} two ni
 * @return {boolean}     is one > two
 */
function bar(one, two) {
  return one > two;
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
