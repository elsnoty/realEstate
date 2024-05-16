import tea1m from "../assets/team1.png"
import tea2m from "../assets/team2.png"
import tea3m from "../assets/team3.png"
import tea4m from "../assets/team4.png"

const ImgTeam = () => {
    const expertTeam = [
            {
            image: tea1m,
            name: "John Doe",
            position: "Service Support"
        },
        {
            image: tea2m,
            name: "Thomas Shalby",
            position: "Markteing"
        },
        {
            image: tea3m,
            name: "Madeha",
            position: "Desinger"
        },
        {
            image: tea4m,
            name: "Miles",
            position: "Spider Man"
        }
    ]
    return ( 
        <div className="flex flex-wrap justify-center items-center gap-10">
            {
                expertTeam.map((ele, index)=>(
                    <div key={index}>
                        <img src={ele.image} alt="" className="rounded-xl"/>
                        <h3>{ele.name}</h3>
                        <p>{ele.position}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default ImgTeam;