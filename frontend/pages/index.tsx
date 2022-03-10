import type { NextPage } from "next";

// Components
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
    return (
        <section>
            <Header />
            <Main />
        </section>
    );
};

export default Home;
