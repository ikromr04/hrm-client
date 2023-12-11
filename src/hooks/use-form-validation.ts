import { ValidationError } from '@/types/validation-error'
import { ChangeEvent, useState } from 'react'

export const useFormValidation = () => {
  const [validationError, setValidationError] = useState<ValidationError>({ message: '' })

  const formChangeHandler = (evt: ChangeEvent<HTMLFormElement>) => 
    setValidationError((prevValidationError) => {
      prevValidationError.message = ''
      if (prevValidationError?.errors?.[evt.target.name]) {
        delete prevValidationError.errors[evt.target.name]
      }
      return prevValidationError
    })

  return { validationError, setValidationError, formChangeHandler }
}
