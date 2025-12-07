import EcoSystemIcon from "../assets/icons/ecosystem.svg";

const features = [
    {
        title: "Integration Ecosystem",
        description:
            "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    },
    {
        title: "Goal Setting and Tracking",
        description:
            "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
    {
        title: "Secure Data Encryption",
        description:
            "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    },
];

export const Features = () => {
    return (
        <section className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h1 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
                    Everything you need
                </h1>
                <div className="max-w-xl mx-auto">
                    <p className="text-center mt-5 text-xl text-white/70">
                        Enjoy customizable lists, team work tools, and smart
                        tracking all in one place. Set tasks, get reminders, and
                        see your progress simply and quickly.
                    </p>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row gap-4">
                    {features.map(({ title, description }, idx) => (
                        <div
                            key={idx}
                            className="border border-white/30 px-5 py-10 text-center rounded-xl flex-1"
                        >
                            <div className="h-16 w-16 inline-flex items-center justify-center bg-white text-black rounded-lg">
                                <EcoSystemIcon />
                            </div>
                            <h2 className="mt-6 font-bold">{title}</h2>
                            <p className="mt-2 text-white/70">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
