//import '../app/globals.css'
import '../app/style/components/_Header.scss';


const App = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
} 
export default App; 