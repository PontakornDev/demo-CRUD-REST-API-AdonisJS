/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import CourseController from 'App/Controllers/Http/CoursesController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('', async (ctx: any) => {
    return new CourseController().list(ctx)
  })
  Route.get('/:id', async (ctx: any) => {
    return new CourseController().getID(ctx)
  })
  Route.post('', async (ctx: any) => {
    return new CourseController().insert(ctx)
  })
  Route.put('/:id', async (ctx: any) => {
    return new CourseController().update(ctx)
  })
  Route.delete('/:id', async (ctx: any) => {
    return new CourseController().delete(ctx)
  })
}).prefix('/course')
