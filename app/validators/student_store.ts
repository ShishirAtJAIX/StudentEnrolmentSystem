import vine from '@vinejs/vine'

export const studentStoreValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(2),
    lastName: vine.string().trim().minLength(2),
    emailAddress: vine.string().email(),
    dateOfBirth: vine.date()  // Or vine.date() if ISO string
  })
)