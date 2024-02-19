import Spinner from '../spinner/spinner'
import { Loading } from './styled'

function AppLoading() {
  return (
    <Loading>
      <Spinner width={56} height={56} />
    </Loading>
  )
}

export default AppLoading
