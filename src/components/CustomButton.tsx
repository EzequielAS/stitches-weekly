import { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface InterfaceCustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonHidden?: boolean;
}

type CustomButtonProps =  typeof Container[$$StyledComponentProps] 
  & InterfaceCustomButton

export function CustomButton({ title, buttonHidden, ...rest }: CustomButtonProps) {
  return (
    <Container 
      css={{
        display: `${buttonHidden && 'none'}`
      }}
      {...rest}
    >
      {title}
    </Container>
  )
}