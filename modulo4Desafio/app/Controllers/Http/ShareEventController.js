'use strict'

const Event = use('App/Models/Event')
const Kue = use('Kue')
const Job = use('App/Jobs/ShareEventMail')

class ShareEventController {
  async share ({ request, response, params, auth }) {
    const event = await Event.findOrFail(params.event_id)
    const email = request.input('email')
    if (event.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Apenas o criador pode compartilhar o evento.'
        }
      })
    }

    const { username } = auth.user

    Kue.dispatch(Job.key, { username, event, email }, { attempts: 3 })

    return response.status(200).send({
      success: {
        message: 'Evento compartilhado com sucesso'
      }
    })
  }
}

module.exports = ShareEventController
