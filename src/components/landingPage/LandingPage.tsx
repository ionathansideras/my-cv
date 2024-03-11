import logo from "../../assets/canvas-logo.svg";

export default function LandingPage() {
    return (
        <div className="landing-page">
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
                <section></section>
            </main>
        </div>
    );
}
