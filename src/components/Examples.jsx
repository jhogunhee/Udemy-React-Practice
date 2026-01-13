import TabButton from "@/TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import {EXAMPLES} from "@/example";
import {useState} from "react";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    let topic = 'Please Select a Topic';
    const handleTabChange = (selectedTopic) => {
        setSelectedTopic(selectedTopic);
    }

    if (selectedTopic) {
        topic = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>
    }

    return (
        <>
            <Section title="Examples" id="examples">
                <Tabs
                    buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'}
                                   onClick={() => handleTabChange('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}
                                   onClick={() => handleTabChange('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}
                                   onClick={() => handleTabChange('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'}
                                   onClick={() => handleTabChange('state')}>State</TabButton>
                    </>
                }>{topic}</Tabs>
            </Section>
        </>
    )
};
export default Examples;