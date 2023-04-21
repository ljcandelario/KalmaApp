const choicesContainer = document.querySelector(".choices")

const logo2 = document.querySelector("#logo2")

function Kalma(props) {
    return (
        <div className={props.kalma}  >
            {props.children}
        </div>
    );
}

ReactDOM.render (
    <div>
        <Kalma kalma="title" fontS="8rem">Kalma</Kalma>
    </div>,
    logo2
)

function Choices(props) {
    return (
        <div className={props.choice} >
            {props.children}
        </div>
    );
} 

ReactDOM.render (
    <div id="buttons">
        <a href="../Meditate/Meditate.html"><Choices choice="choice1" >Meditate</Choices></a>
        <a href="../Relax/Relax.html"><Choices choice="choice2" >Relax</Choices></a>
    </div>,
    choicesContainer
) 