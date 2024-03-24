import google from "../../assets/google.svg";
import microsoft from "../../assets/microsoft2.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import amazon from "../../assets/amazon.svg";
import netflix from "../../assets/netflix.svg";
import brackets from "../../assets/brackets2.svg";
import star from "../../assets/star.svg";

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
                <section>
                    <div className="neon-bar">
                        <div className="top-object"></div>
                        <div className="first-neon-bar" id="first-neon"></div>
                        <div className="icon-bar-container">
                            <img className="icon-bar-img" src={brackets} />
                            <div
                                className="icon-bar-background"
                                id="first-neon-background"
                            ></div>
                        </div>
                        <div className="second-neon-bar" id="second-neon"></div>
                    </div>
                    <h1>hello</h1>

                    {/* <div className="section-content">
                        <h1>Let’s build from here</h1>
                        <p>
                            CanvasCV is a platform that allows you to create a
                            professional resume in minutes.
                        </p>
                        <div className="section-email">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button>Get Started</button>
                        </div>
                        <p>Templates approved by</p>
                        <div className="company-logos">
                            <img src={google} alt="Google" />
                            <img src={microsoft} alt="Microsoft" />
                            <img src={facebook} alt="Facebook" />
                            <img src={apple} alt="Apple" />
                            <img src={amazon} alt="Amazon" />
                            <img src={netflix} alt="Netflix" />
                        </div>
                    </div> */}
                </section>
                <section>
                    <div className="neon-bar">
                        <div className="first-neon-bar" id="third-neon"></div>
                        <div className="icon-bar-container">
                            <img className="icon-bar-img" src={star} />
                            <div
                                className="icon-bar-background"
                                id="second-neon-background"
                            ></div>
                        </div>
                        <div className="second-neon-bar" id="fourth-neon"></div>
                    </div>
                    <h1>hello</h1>
                </section>
            </main>
        </div>
    );
}
