import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import nusLogo from "./assets/nus-logo.jpg";

function App() {
    return (
        <>
            <section className="flex items-center gap-4">
                <div>
                    <img src={nusLogo} className="h-20" />
                </div>
                <div>
                    <h1>Tan Boon Leong</h1>
                    <div className="flex items-center gap-2">
                        <a href="https://www.linkedin.com/in/tanboonleong">
                            <FaLinkedin size={30} />
                        </a>
                        <p>NUS CEG Year 2</p>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div>
                    <h3>Projects</h3>
                    <p>Frontend: React Router v7, Next.js, Expo</p>
                    <p>Backend: Flask, Firebase, Supabase</p>
                    <p>Hardware: Arduino, ESP32, ESP8266</p>
                </div>
            </section>
        </>
    );
}

export default App;
