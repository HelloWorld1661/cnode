/*lodash API: https://lodash.com/docs/ */

var _ = require('lodash');

var user1 = {
    name: "Jon",
    height: 180,
    weight: 70
};

var user2 = {
    name: "Andy",
    height: 180,
    weight: 95
};

var user3 = {
    name: "Jon",
    height: 180,
    weight: 80
};

var users = [user1, user2, user3];

/**_.map()  [Returns => (Array): Returns the new mapped array.]
 * _.remove()   [Returns => (Array): Returns the new array of removed elements.]
 * _.uniqBy()   [Returns => (Array): Returns the new duplicate free array.]
 */

/**_.map method
 * Creates an array of values by running each element in collection 
 * thru iteratee. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 * 
 * Returns => (Array): Returns the new mapped array.
 */
// var resultMap = _.map(users, function(user) {
//     return {
//         name: user.name,
//         height: user.height,
//         age: 20
//     }
// })
// console.log(resultMap);
/**=>[ { name: 'Jon', height: 180, age: 20 },
  { name: 'Andy', height: 180, age: 20 },
  { name: 'Jon', height: 180, age: 20 } ]
 */
//--------------------------------------------------------------------------

/**—_.remove method
 * Removes all elements from array that predicate returns truthy for 
 * and returns an array of the removed elements. The predicate is 
 * invoked with three arguments: (value, index, array).
 * 
 * Returns => (Array): Returns the new array of removed elements.
 */
// var resultRemove = _.remove(users, { name: 'Jon' });
// console.log("We will remove:");
// console.log(resultRemove);
// console.log('----------------------' + '\n' + 'we get:');
// console.log(users);
/**We will remove:
[ { name: 'Jon', height: 180, weight: 70 },
  { name: 'Jon', height: 180, weight: 80 } ]
----------------------
we get:
[ { name: 'Andy', height: 180, weight: 95 } ] */
//--------------------------------------------------------------------------

/**_.uniqBy method
 *Creates a duplicate-free version of an array, using SameValueZero for 
 *equality comparisons, in which only the first occurrence of each element 
 *is kept. The order of result values is determined by the order they occur 
 *in the array.
 *
 * Returns => (Array): Returns the new duplicate free array.
 */
var resultUniq = _.uniqBy(users, 'name');
console.log(resultUniq);
/**[ { name: 'Jon', height: 180, weight: 70 },
  { name: 'Andy', height: 180, weight: 95 } ]*/