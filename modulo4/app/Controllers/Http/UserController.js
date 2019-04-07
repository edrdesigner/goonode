'use strict'
const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  /**
   *
   * @param {Object} ctx - context {request, response}
   */
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const trx = await Database.beginTransaction() // add a wrapper to verify if everything is ok
    const user = await User.create(data, trx)

    if (addresses) {
      await user.addresses().createMany(addresses, trx)
    }

    await trx.commit() // commit changes

    return user
  }
}

module.exports = UserController
