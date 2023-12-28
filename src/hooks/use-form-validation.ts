import { ValidationError } from '@/types/validation-error'
import { ChangeEvent, useState } from 'react'

export const useFormValidation = () => {
  const [validationError, setValidationError] = useState<ValidationError>({ message: '' })

  const formChangeHandler = (evt: ChangeEvent<HTMLFormElement>) => 
    setValidationError((prevValidationError) => {
      if (prevValidationError?.errors?.[evt.target.name]) {
        delete prevValidationError.errors[evt.target.name]
      }
      if (prevValidationError.errors && !Object.keys(prevValidationError.errors).length) {
        prevValidationError.message = ''
      }
      return prevValidationError
    })

  return { validationError, setValidationError, formChangeHandler }
}
