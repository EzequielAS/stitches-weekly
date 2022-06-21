import { globalCss } from '@stitches/react'
import { useEffect, useState } from 'react'
import { CustomButton } from './components/CustomButton'
import { styled, scaleUp, darkTheme } from './theme'

const Button = styled('button', {
  mx: '$3',
  // '@bp1': {
  //   background: '$purple500 !important'
  // },
  '&:hover': {
    animation: `${scaleUp} 200ms`,
  },
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
        background: '$primary',
        color: '$onPrimary'
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

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const textButton = isDarkTheme ? 'Light' : 'Dark'

  const handleChangeTheme = () => {
    setIsDarkTheme(state => !state)
  }

  return (
    <div 
      className={isDarkTheme ? darkTheme : ''}
    >
      <Button onClick={handleChangeTheme}>
        {textButton}
      </Button>

      <Button 
        buttonType="danger" 
        size={{
          "@initial": 'small',
          "@bp1" : "big"
        }}
        buttonStyle="outlined"
      >
          teste
      </Button>

      <Button 
        buttonType="success"
        as="a"
      >
        teste
      </Button>

      <CustomButton 
        buttonHidden
        title='teste'
      />
    </div>
  )
}
