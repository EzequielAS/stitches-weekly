import { $$StyledComponentProps } from '@stitches/react/types/styled-component'
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface InterfaceCustomButton {
  title: string;
}

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  typeof Container[$$StyledComponentProps] & InterfaceCustomButton

export function CustomButton({ title, ...rest }: CustomButtonProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}