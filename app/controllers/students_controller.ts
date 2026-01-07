import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {

public async index() {
    return 'ok'
  }

  // *** GET ALL STUDENTS ***//
 async show({ request, response }: HttpContext) {
    const Student = (await import('#models/students')).default
    const students = await Student.all()
    return response.json({
                        students,
                        studentCount: students.length,
                        }), { prettyPrint: true }
      }
    }