import { useState } from "react";
/* const AthletsList = ({ Athlets }) => {
    const renderAthlets = () => {
        return Athlets.map((athlete, index) => (
            <div key={index}>
                <p>{athlete.name} har vunnit {athlete.gold} guld.</p>
            </div>
        ));
    };

    return (
        <div>
            <h2>Lista över idrottare</h2>
            {renderAthlets()}
        </div>
    );
};

export default AthletsList; */

const AthleteList = ({ info }) => {

    const [gold, setGold] = useState(info.gold);
    const handleClick = () => {
        setGold(gold + 1);
    }

    return (
        <>
        <div className="AthleteBox">
        <h2>Athletes</h2>
        {info.map((info) =>
        <div className="AthleteCard">
            <div className="AthleteInfo">
        <p>Name: {info.name}</p>
        <p>Gold Medals: {gold}</p> 
        <button onClick={handleClick}>More Gold</button>
        </div>
        {/* {info.img && <img src={info.img} alt={info.name} />} */}
        { info.img ? <img src={info.img} alt={info.name} /> : <img src="https://media.istockphoto.com/id/1158723576/de/vektor/running-mann-symbol-zeichen-flach.jpg?s=612x612&w=0&k=20&c=lqQ98SBe-Q3d0L6uoXp9kdiKMcirl46vb-FJskYS6yE="/>}
        </div> 
        )}
        </div>
        </>
    )
}
export default AthleteList;