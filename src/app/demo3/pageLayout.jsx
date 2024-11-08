import { background } from "@chakra-ui/react"
import Header from "../components/PageDemo3/Header/Header"

export const Layout = ({ children }) => {
  return (
    <>
        <div>
            <Header />
            <main style={{
                margin: "0 auto",
                width: "100%",
                background: "#000"
            }}>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout
