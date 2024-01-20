import About from "../components/About"
import Header from "../components/Header"
import Slider from "../components/Slider"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Header />
        <Slider />
        <main>
            <About />
            <section>
                <Link href={"/menu"}>
                <h2>Menu</h2>
                </Link>
            </section>
            <section>
                <h2>Gallery</h2>
               
            </section>
        </main>
        <Footer />
        </>
    )
}