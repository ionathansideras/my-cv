export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-page-background" />
            <header className="landing-page-header">
                <div className="logo">
                    <span>{"<"}</span>
                    <p>CanvasCV</p>
                    <span>{"/>"}</span>
                </div>
                <nav>
                    <button className="landing-page-signin">Sign in</button>
                    <button className="landing-page-signup">Sign up</button>
                </nav>
            </header>
            <main>
                <section>
                    <div className="neon-bar">
                        <p>o</p>
                        <div className="neon-bar-primary"></div>
                        <div>{"<>"}</div>
                        <div className="neon-bar-secondary"></div>
                    </div>
                    <div></div>
                </section>
            </main>
        </div>
    );
}
