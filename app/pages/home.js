import About from "../components/About"
import Header from "../components/Header"
import Slider from "../components/Slider"

export default function Home() {
    return (
        <>
        <Header />
        <Slider />
        <main>
            <About />
            <section>
                <h2>Menu</h2>
            </section>
            <section>
                <h2>Gallery</h2>
            </section>
        </main>
        </>
    )
}