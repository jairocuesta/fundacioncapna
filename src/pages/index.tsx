// Components
import Layout from "@/components/Layout";
import HomeHero from "@/components/Home/Hero";
import HomeAbout from "@/components/Home/About";
import HomeHistory from "@/components/Home/History";
import HomeImpact from "@/components/Home/Impact";
import HomeVisionMision from "@/components/Home/VisionMision";
import HomePrograms from "@/components/Home/Programs";
import HomePartners from "@/components/Home/Partners";
import HomeBlog from "@/components/Home/Blog";
import HomeNewsletter from "@/components/Home/Newsletter";

export default function HomePage() {
    return (
        <Layout title={"Inicio"}>
            <HomeHero />
            <HomeAbout />
            <HomePrograms />
            <HomeNewsletter />
            <HomePartners />
            <HomeBlog />
        </Layout>
    )
}