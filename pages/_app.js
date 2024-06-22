//import '../app/globals.css'
import '../app/style/pages/_index.scss';
import '../app/style/pages/_menu.scss';
import '../app/style/pages/_gallery.scss';
import '../app/style/components/_Header.scss';
import '../app/style/components/_Footer.scss';
import '../app/style/components/_About.scss';
import '../app/style/components/_Collapse.scss';
import '../app/style/components/_HomeSlider.scss';
import '../app/style/components/_DishMenu.scss';
import '../app/style/components/_PhotosGallery.scss';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
export default App; 