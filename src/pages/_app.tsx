import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../../component/navbar";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Navbar>
                <Component {...pageProps} />;
            </Navbar>
        </>
    );
};

export default App;
