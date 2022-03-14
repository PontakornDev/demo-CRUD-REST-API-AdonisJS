import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CoursesController {
  public async list(_: HttpContextContract) {
    const course = await Database.query().from('onlinecourse').select('*')
    return course
  }

  public async getID({ params, response }) {
    const course = await Database.from('onlinecourse').where('id', params.id)
    if (course[0] == null) {
      return response.notFound({ message: `id:${params.id} not found` })
    } else {
      return response.ok(course)
    }
  }

  public async insert({ request, response }) {
    const data = request.requestData
    const course = await Database.table('onlinecourse').insert(data)
    return response.ok({ id: `${course}`, data: data })
  }

  public async update({ params, request, response }) {
    const data = request.requestData
    const course = await Database.from('onlinecourse').where('id', params.id).update(data)
    if (!course) {
      return response.notFound({ message: `can't update id:${params.id} because id not found` })
    } else {
      return response.ok({ id: `${params.id}`, update_data: data })
    }
  }

  public async delete({ params, response }) {
    const courseDeleteID = await Database.from('onlinecourse').where('id', params.id)
    const course = await Database.from('onlinecourse').where('id', params.id).delete()
    if (!course) {
      return response.notFound({ message: `can't delete id:${params.id} because id not found` })
    } else {
      return response.ok([{ message: `delete successfully!!` }, courseDeleteID[0]])
    }
  }
}
