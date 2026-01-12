import {useState} from 'react'
import {CORE_CONCEPTS} from '@/data.js';
import {Header} from '@/components/Header/Header';
import CoreConcept from "@/components/CoreConcept/CoreConcept";
import TabButton from "@/TabButton";
import {EXAMPLES} from "@/example";

function App() {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleTabChange = (selectedTopic) => {
        setSelectedTopic(selectedTopic);
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item) => (
                            <CoreConcept key={item.title} {... item} />
                        ))};
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleTabChange('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleTabChange('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleTabChange('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleTabChange('state')}>State</TabButton>
                    </menu>
                </section>
                    {!selectedTopic && <p>Please select a topic.</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
                        </div>
                    )}
            </main>
        </div>
    );
}

export default App;
