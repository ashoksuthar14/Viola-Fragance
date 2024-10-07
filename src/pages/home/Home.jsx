import HeroSection from "../../components/herosection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductSection from "../../components/productsection/ProductSection";
import ExploreSection from "../../components/exploresection/ExploreSection";

const Home = () => {
    return (
        <Layout>
            {/* Assign id to HeroSection */}
            <div id="hero">
                <HeroSection />
            </div>

            {/* Assign id to ProductSection */}
            <div id="product">
                <ProductSection />
            </div>

            {/* Assign id to ExploreSection */}
            <div id="explore">
                <ExploreSection />
            </div>
        </Layout>
    );
}

export default Home;
