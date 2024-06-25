export default function SectionTitle({children}) {
    return (
        <section className="py-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">{children}</h2>
        </section>
        );
}