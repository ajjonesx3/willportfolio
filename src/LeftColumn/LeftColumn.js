import './LeftColumn.css'

const LeftColumn = ({text}) => {
    return (
        <div className="leftColumn">
            <div className="textHolder">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default LeftColumn;