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
    

public async show2({ params, response }: HttpContext) {
    const Student = (await import('#models/students')).default
    const student = await Student.find(params.id)
    
    return response.json({
      student,
      message: 'Student retrieved successfully'
    })
  } 
}
    // Other CRUD methods (store, update, destroy) can be added here as needed