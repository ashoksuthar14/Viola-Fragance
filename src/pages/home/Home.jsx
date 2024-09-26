import HeroSection from "../../components/herosection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductSection from "../../components/productsection/ProductSection";
import ExploreSection from "../../components/exploresection/ExploreSection";

const Home = () => {
    return (
        <Layout>
            <HeroSection/>

            <ProductSection/>

            <ExploreSection/>

        </Layout>
    );
}

export default Home;