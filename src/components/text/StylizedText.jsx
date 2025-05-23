function StylizedText({ phrase, color }) {
    return <h1 style={{ color, textTransform: 'uppercase' }}>{phrase}</h1>
};

export default StylizedText