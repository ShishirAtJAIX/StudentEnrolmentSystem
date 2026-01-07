import type { HttpContext } from '@adonisjs/core/http'
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
 

  public static async update() {}

  public static async destroy() {}
}
