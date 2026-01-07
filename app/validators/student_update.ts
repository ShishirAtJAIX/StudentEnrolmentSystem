import vine from '@vinejs/vine'

export const studentUpdateValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(2).optional(),
    lastName: vine.string().trim().minLength(2).optional(),
    emailAddress: vine.string().email().optional(),
    dateOfBirth: vine.date().optional()
  })
)