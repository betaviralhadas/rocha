
import Header from "../components/Header"

import HeadPage from "../components/Head"
import Footer from "../components/Footer"
import DishMenu from "../components/DishMenu"
import CouvertMenu from "../components/CouvertMenu"

export default function Menu() {
    return (
        <>
            <HeadPage />

            <Header />
            <main className="page">
                <h1 className="menu_title">Menu</h1>
                <div className="content_menu">
                    <CouvertMenu />
                    <DishMenu />
                </div>
            </main>
            <Footer />
        </>
    )
}