import "./App.css";
import { FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <>
            <section>
                <div>
                    <h1>Tan Boon Leong</h1>
                    <p>NUS CEG Year 2</p>
                </div>
            </section>

            <section className="mt-5">
                <div>
                    <a href="www.linkedin.com/in/tanboonleong">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </section>
        </>
    );
}

export default App;
