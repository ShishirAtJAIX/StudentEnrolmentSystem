import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Students extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  public declare firstName: string

  @column()
  public declare lastName: string

  @column()
  public declare emailAddress: string

  @column()
  public declare dateOfBirth: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}