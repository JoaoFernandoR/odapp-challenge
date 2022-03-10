import type { NextPage } from "next";
// Styles
import { IndexSection } from "../styles/index.styles";
// Components
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
    return (
        <IndexSection>
            <Header />
            <Main />
        </IndexSection>
    );
};

export default Home;
