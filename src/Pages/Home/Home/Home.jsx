import { Helmet } from "react-helmet-async";
import bannerImg from "../../../../src/assets/dark_banner.jpg"
import Banner from "../Banner/Banner";

export default function Home() {
    return (
        <div style={{backgroundImage: {bannerImg}}} className="max-h-screen">
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <Banner />
        </div>
        );
}