import CopyIcon from '@/components/icons/copy-icon'
import { Button } from './styled'
import { useRef, useState } from 'react'
import CopiedIcon from '@/components/icons/copied-icon'
import Info from '../info/info'

type CopyButtonProps = {
  className?: string
  copyText?: string
}

function CopyButton({ className, copyText }: CopyButtonProps): JSX.Element {
  const [icon, setIcon] = useState<JSX.Element>(<CopyIcon/>)
  const ref = useRef<HTMLTextAreaElement | null>(null)

  const handleButtonClick = () => {
    if (ref.current && copyText) {
      ref.current.value = copyText;
      ref.current.focus();
      ref.current.select();
      document.execCommand('copy');
    }

    setIcon(<CopiedIcon />)
    setTimeout(() => setIcon(<CopyIcon />), 1500)
  }

  return (
    <>
      <Button
        className={className}
        type="button"
        onClick={handleButtonClick}
      >
        {icon}
        <Info top>Скопировать</Info>
      </Button>
      <textarea ref={ref} className="visually-hidden"></textarea>
    </>
  )
}

export default CopyButton