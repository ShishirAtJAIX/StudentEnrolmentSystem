/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import LecturersController from '#controllers/lecturers_controller'
import StudentsController from '#controllers/students_controller'

//root endpoint for the API
router.get('/', async () => {
  return {
    hello: 'World 2026 from AdonisJS!',
  }
})

//endpoint for ABOUT page in the website
router.get('/about', async () => {
  return 'This is the about page.'
})

//CRUD endpoints for the LecturersController
router.group(() => {
  router.resource('lecturers', LecturersController).apiOnly()
})
.prefix('/api/v0')

 //CRUD endpoint for TABLE students
/*router.group(() => {
  router.get('students', StudentsController.show2)
  router.post('AddStudents', [StudentsController, 'store'])
  router.get('students/:StudentID', StudentsController.show)
  router.patch('students/:StudentID', StudentsController.update)
  router.delete('students/:StudentID', StudentsController.destroy)
})
.prefix('/api/v1')*/

//debugging why the firstName and custom columns are not in the output

// ***** ENDPOINT #1  ***** //
router.get('/api/v1/students', [StudentsController, 'show'])