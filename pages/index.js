import Link from "next/link"
import Image from "next/image"
import HeadPage from "../components/Head"
import About from "../components/About"
import Header from "../components/Header"
import Slider from "../components/HomeSlider"
import Footer from "../components/Footer"
import Menu from "../public/img/logo2.png"
import Gallery from "../public/img/logo2.png"

export default function Home() {
    return (
        <>
            <HeadPage />
            
                <Header />
                <main className="page">
                    <Slider />
                    <About />
                    <section className="menu_gallery">
                        <Link href={"/menu"} className="menu_link">
                            <Image
                                className="image_link"
                                src={Menu}
                                alt="menu"
                            />
                            <h2>Menu</h2>
                        </Link>
                        <section className="gallery_link">
                            <h2>Gallery</h2>
                            <Image
                                className="image_link"
                                src={Gallery}
                                alt="gallery"
                            />
                        </section>
                    </section>
                </main>
                <Footer />
            
        </>
    )
}