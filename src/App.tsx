import { globalCss } from '@stitches/react'
import { useEffect } from 'react'
import { styled } from './theme'

const Button = styled('button', {
  variants: {
    size: {
      small: {
        fontSize: '$1',
        padding: '$1',
      },
      big: {
        fontSize: '$4',
        padding: '$2',
      }
    },

    buttonType: {
      default: {
        background: '$gray500',
      },
      danger: {
        background: '$red500',
        border: '1px solid $red500',
      },
      success: {
        background: '$green500',
      }
    },

    buttonStyle: {
      outlined: {
        background: 'transparent',
      }
    }
  },

  defaultVariants: {
    buttonType: 'default',
    size: 'small',
  },

  compoundVariants: [
    {
      buttonType: 'danger',
      buttonStyle: 'outlined',
      css: {
        color: '$red500',
      }
    }
  ]
})

const globalStyles = globalCss({
  body: { margin: 0 },
});

export function App() {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <div>
      <Button>teste</Button>

      <Button 
        buttonType="danger" 
        size={{
          "@initial": 'small',
          "@media (min-width: 500px)" : "big"
        }}
        buttonStyle="outlined"
      >
          teste
      </Button>

      <Button buttonType="success">teste</Button>
    </div>
  )
}
