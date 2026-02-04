export default function Section({title, children, ...others}) {
    return (
        <section {...others}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}