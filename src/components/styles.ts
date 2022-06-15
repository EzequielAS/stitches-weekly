import { styled } from "../theme"

export const Container = styled('button', {
  mx: '$3',
  variants: {
    size: {
      small: {
        fontSize: '$',
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
      hidden: {
        display: 'none'
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