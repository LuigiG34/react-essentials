import { CORE_CONCEPTS } from "./data.js";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
    function handleClick(selectedButton) {
        console.log(selectedButton);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton onClick={() => handleClick('state')}>State</TabButton>
                    </menu>

                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
