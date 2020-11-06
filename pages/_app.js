import StoreProvider from '../Store'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from '../Theme'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
    	<ThemeProvider theme={lightTheme}>
	    	<Component {...pageProps} />
	    </ThemeProvider>
    </StoreProvider>
  )
}

export default MyApp
