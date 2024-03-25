

const Tags = ({ tagContent }) => {
    // établissement du DOM
    return (
        <div className="tag__grid">
            {tagContent.map((tag, index) => (
                <div className="tag" key={index}>
                    {tag}
                </div>
            ))}
        </div>
    );
}

//exportation du composant
export default Tags;