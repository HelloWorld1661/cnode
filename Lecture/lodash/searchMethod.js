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

/**{_.find();   [Returns (*)=> Returns the matched element, else undefined.]
 * _.findIndex();   [Returns => (number): Returns the index of the found element,else -1.]
 * _.filter();  [Returns =>  (Array): Returns the new filtered array.]
 * _.pluck() is replaced by _.map()}  [Returns => (Array): Returns the new mapped array.]
 * */
//--------------------------------------------------------------------------

/**find method 
 * Iterates over elements of collection, returning the first element 
 * predicate returns truthy for. The predicate is invoked with three 
 * arguments: (value, index|key, collection).
 * 
 * Returns( * ) => Returns the matched element,else undefined.
 */
//Example:
// var resultUserInfo = _.find(users, { name: 'Jon' }); 
// console.log(resultUserInfo); //{ name: 'Jon', height: 180, weight: 70 }

// var resultUserInfo1 = _.find(users, { name: 'Jon', weight: 75 });
// console.log(resultUserInfo1); //{ name: 'Jon', height: 180, weight: 75 }
//--------------------------------------------------------------------------

/**findIndex method 
 * This method is like _.find except that it returns the index of the 
 * first element predicate returns truthy for instead of the element itself.
 */
//Example:
// var resultIndex = _.findIndex(users, { name: 'Jon', weight: 75 });
// console.log(resultIndex); //2
//--------------------------------------------------------------------------

/**filter method
 * Iterates over elements of collection, returning an array of all elements 
 * predicate returns truthy for. The predicate is invoked with three arguments: 
 * (value, index|key, collection).
 */
//Example:
// var resultFliter = _.filter(users, { name: 'Jon' });
// console.log(resultFliter); //[ { name: 'Jon', height: 180, weight: 70 },{ name: 'Jon', height: 180, weight: 75 }]

// var resultFliter1 = _.filter(users, function(user) {
//     return user.weight > 75;
// });
// console.log(resultFliter1); //[ { name: 'Andy', height: 180, weight: 95 },{ name: 'Jon', height: 180, weight: 80 }]
//--------------------------------------------------------------------------

/**_.map()
 * Creates an array of values by running each element in collection 
 * thru iteratee.The iteratee is invoked with three arguments:
 * (value, index | key, collection).
 */
var resultMap = _.map(users, 'name');
console.log(resultMap); //=>[ 'Jon', 'Andy', 'Jon' ]