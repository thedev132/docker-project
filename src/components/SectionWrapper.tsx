const SectionWrapper: React.FC<any> = ({ children, ...props }) => (
    <section {...props} className={`py-16 lg:py-24 ${props.className || ""}`}>
        {children}
    </section>
);

export default SectionWrapper