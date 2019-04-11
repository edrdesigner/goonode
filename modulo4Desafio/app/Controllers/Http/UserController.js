'use strict'

const User = use('App/Models/User')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class UserController {
  /**
   * @param {Object} ctx - context {request, response}
   */
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)
    return user
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, response, auth }) {
    const data = request.only(['password', 'password_old', 'username'])
    const { user } = auth

    if (data.password_old) {
      const isTheSame = await Hash.verify(data.password_old, user.password)

      if (!isTheSame) {
        return response.status(401).send({
          error: {
            message: 'Erro: a senha antiga não é valida'
          }
        })
      }

      if (!data.password) {
        return response.status(401).send({
          error: {
            message: 'Erro: você não informou a nova senha'
          }
        })
      }

      delete data.password_old
    }

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
