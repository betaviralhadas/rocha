import Header from "../components/Header"

import HeadPage from "../components/Head"
import Footer from "../components/Footer"
import PhotosGallery from "../components/PhotosGallery"

export default function Gallery() {
    return (
        <>
            <HeadPage />

            <Header />
            <main className="page">
                <h1 className="title">Gallery</h1>
                <PhotosGallery />
            </main>
            <Footer />
        </>
    )
}