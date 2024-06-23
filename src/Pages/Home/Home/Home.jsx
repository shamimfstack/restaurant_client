import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <div className="max-h-full">
            <Helmet>
                <title>homepage</title>
            </Helmet>
            <h1>Homepage</h1>
        </div>
        );
}