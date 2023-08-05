/** ЗАДАЧА 47 - Использование метода "reduce" (map & filter) для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

/** Решение с помощью Map и Filter:

function popularPostsIds(posts, minimalComentsQty) {
    let filterEl = posts.filter(el => el.comments >= minimalComentsQty)
    let mapEl = filterEl.map(el => el.postId)
    return mapEl
}
*/

const popularPostsIds = (posts, minimalComentsQty) => {
  const kek = posts.reduce((comentsQty, post) => {
    if (post.comments >= minimalComentsQty) {
      comentsQty.push(post.postId)
    }
    return comentsQty
  }, [])
  return kek
}



const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]


console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []
