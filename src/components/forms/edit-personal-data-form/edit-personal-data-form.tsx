import { BaseSyntheticEvent, useRef, useState } from 'react'
import Button from '../../ui/button/button'
import Buttons from '../../ui/buttons/buttons'
import { Form, WideColumn } from './styled'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { getEmployeePersonalData } from '../../../store/employees-slice/employees-selector'
import Input from '../../ui/input/input'
import { ValidationError } from '../../../types/validation-error'
import { debounce } from '../../../utils'
import GenderSelect from './gender-select/gender-select'
import FamilyStatusSelect from './family-status-select/family-status-select'
import { updateEmployeePersonalDataAction } from '../../../store/employees-slice/employees-api-actions'
import { toast } from 'react-toastify'

type EditPersonalDataFormProps = {
  closeModalHandler: () => void
}

function EditPersonalDataForm({ closeModalHandler }: EditPersonalDataFormProps): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)
  const [validationError, setValidationError] = useState<ValidationError | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const dispatch = useAppDispatch()

  if (!personalData) {
    return <></>
  }

  const handleInputsChange = debounce((evt: BaseSyntheticEvent): void =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      }
    }))

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault()
    evt.target.setAttribute('disabled', 'disabled')

    formRef.current && dispatch(updateEmployeePersonalDataAction({
      formData: new FormData(formRef.current),
      employeeId: personalData.userId,
      errorHandler(error) {
        evt.target.removeAttribute('disabled')
        setValidationError(error)
      },
      successHandler() {
        evt.target.removeAttribute('disabled')
        toast.success('Данные успешно обновлены')
        closeModalHandler()
      },
    }))
  }

  return (
    <Form ref={formRef}>
      <Input
        label="Дата рождения"
        type="datetime-local"
        name="birth_date"
        defaultValue={personalData.birthDate}
        errorMessage={validationError?.errors?.birth_date?.[0]}
        onInput={handleInputsChange}
      />
      <GenderSelect />
      <Input
        label="Национальность"
        type="text"
        name="nationality"
        defaultValue={personalData.nationality}
        errorMessage={validationError?.errors?.nationality?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Гражданство"
        type="text"
        name="citizenship"
        defaultValue={personalData.citizenship}
        errorMessage={validationError?.errors?.citizenship?.[0]}
        onInput={handleInputsChange}
      />
      <WideColumn>
        <Input
          label="Адрес"
          type="text"
          name="address"
          defaultValue={personalData.address}
          errorMessage={validationError?.errors?.address?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>
      <Input
        label="Эл. почта"
        type="email"
        name="email"
        defaultValue={personalData.email}
        errorMessage={validationError?.errors?.email?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Телефон-1"
        type="tel"
        name="tel_1"
        defaultValue={personalData.tel1}
        errorMessage={validationError?.errors?.tel_1?.[0]}
        onInput={handleInputsChange}
      />
      <Input
        label="Телефон-2"
        type="tel"
        name="tel_2"
        defaultValue={personalData.tel2}
        errorMessage={validationError?.errors?.tel_2?.[0]}
        onInput={handleInputsChange}
      />
      <FamilyStatusSelect />
      <WideColumn>
        <Input
          label="Дети"
          type="text"
          name="children"
          defaultValue={personalData.children}
          errorMessage={validationError?.errors?.children?.[0]}
          onInput={handleInputsChange}
        />
      </WideColumn>

      <Buttons>
        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Сохранить
        </Button>
        <Button
          type="reset"
          error
          onClick={() => closeModalHandler()}
        >
          Отмена
        </Button>
      </Buttons>
    </Form>
  )
}

export default EditPersonalDataForm
