'use strict'

const User = use('App/Models/User')

class UserController {

  /**
   * @param {Object} ctx - context {request, response}
   */
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data, trx)
    return user
  }
}

module.exports = UserController
