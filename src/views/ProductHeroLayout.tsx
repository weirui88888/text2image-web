import React from 'react'
import { type Theme, styled } from '@mui/material/styles'
import { type SxProps } from '@mui/system'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import ArrowDownIcon from '@mui/icons-material/ArrowDownwardOutlined'
import Box from '@mui/material/Box'
import Typography from '../components/Typography'

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300
  }
}))

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2
})

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>
}

export default function ProductHeroLayout(props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps) {
  const { sxBackground, children } = props

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1
          }}
        />
        <Background sx={sxBackground} />
        <Typography variant="body2" color="inherit" sx={{ position: 'absolute', bottom: 80 }}>
          Discover the experience
        </Typography>
        <IconButton
          aria-label="scroll-down"
          sx={{ position: 'absolute', bottom: 32 }}
          className="scroll-down-animation"
        >
          <ArrowDownIcon sx={{ color: 'common.white' }} />
        </IconButton>
      </Container>
    </ProductHeroLayoutRoot>
  )
}
