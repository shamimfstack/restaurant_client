import { Helmet } from "react-helmet-async";
import bannerImg from "../../../../src/assets/dark_banner.jpg"
import Banner from "../Banner/Banner";
import TopFood from "../TopFood/TopFood";

export default function Home() {
    return (
        <div style={{backgroundImage: {bannerImg}}} className="">
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <Banner />
            <TopFood />
        </div>
        );
}