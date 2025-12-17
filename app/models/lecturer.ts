import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Lecturer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare FirstName: string

  @column()
  declare LastName: string

  @column()
  declare EmailAddress: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}