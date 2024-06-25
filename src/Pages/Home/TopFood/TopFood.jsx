import SectionTitle from "../../../components/SectionTitle";

export default function TopFood() {
    return (
        <section className="py-24 space-y-6">
            <SectionTitle>{"Top Foods"}</SectionTitle>
            <section>
                6 top selling foods will show here
            </section>
            <div className="flex justify-center items-center">
                <button className="bg-green-700 py-3 text-md text-white font-bold uppercase px-6 rounded-sm">See All Foods</button>
            </div>

        </section>
        );
}