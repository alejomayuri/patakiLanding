import Header from "../components/PageDemo1/Header/Header"
import style from "./pageLayout.module.css"
import Footer from "../components/PageDemo1/Footer/footer"

export const Layout = ({ children }) => {
  return (
    <>
        <div>
            <Header />
            <main style={{
                paddingTop: "84px",
                maxWidth: "1600px",
                margin: "0 auto",
                width: "100%"
            }}>
                {children}
            </main>
            <Footer />
        </div>
    </>
  )
}

export default Layout
