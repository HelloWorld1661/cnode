/*lodash API: https://lodash.com/docs/ */

var _ = require('lodash')

var user1 = {
    name: "Jon",
    height: 180,
    weight: 70
}

var user2 = {
    name: "Andy",
    height: 180,
    weight: 95
}

var user3 = {
    name: "Jon",
    height: 180,
    weight: 80
}

var users = [user1, user2, user3]

/**_.chain(value) [Returns => (Object): Returns the new lodash wrapper instance.]
 * 
 */

/**.chain(value)
 * Creates a lodash wrapper instance that wraps value with explicit method chain 
 * sequences enabled.The result of such sequences must be unwrapped with _# value.
 * 
 * Returns => (Object): Returns the new lodash wrapper instance.
 */
var resultChain = _.chain(users).filter({ name: 'Jon' }).uniqBy('name').map('weight').value()
console.log(resultChain) //=>[ 70 ]