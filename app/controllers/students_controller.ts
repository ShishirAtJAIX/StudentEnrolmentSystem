import type { HttpContext } from '@adonisjs/core/http'
import {studentStoreValidator} from '#validators/student_store'

export default class StudentsController {

  // *** GET ALL STUDENTS ***//
   public async show({ request, response }: HttpContext) {
    const Student = (await import('#models/students')).default
    const students = await Student.all()
    return response.json({
                        students,
                        studentCount: students.length,
                        }), { prettyPrint: true }
      }
  // *** GET A SINGLE STUDENT BY ID ***//    
  public async show2({ params, response }: HttpContext) {
  try {
    const Student = (await import('#models/students')).default
    const student = await Student.find(params.id)
    
    if (!student) {
      return response.notFound({ error: 'Student not found' })
    }
    
    return response.json({
      student,
      message: 'Student retrieved successfully'
    })
  } catch (error) {
    return response.internalServerError({ error: 'Failed to retrieve student' })
  }
}    
 // *** ADD A NEW STUDENT ***//
public async store({ request, response }: HttpContext) {
    try {
      const data = await studentStoreValidator.validate(request.body())
      const Student = (await import('#models/students')).default
      const student = await Student.create(data)
      return response.created({ student, message: 'Student created successfully' })
    } catch (error) {
      return response.badRequest({ error: error.messages })
    }
  }

  public static async update() {}

  public static async destroy() {}
}
