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

//root endpoint for the API
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//endpoint for ABOUT page in the website
router.get('/about', async () => {
  return 'This is the about page.'
})

//endpoint for ABOUT page in the website
router.get('/posts/:id', ({ params }) => {
  return 'This is the post with the id ${params.id}'     //params didnt work 
})

//CRUD endpoints for the LecturersController
router.group(() => {
  router.resource('lecturers', LecturersController).apiOnly()
})
.prefix('/api/v1')

// test endpoint to see if it works. 
router.get('/test1', async () => {
  return {
    This: 'RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
  }
})

