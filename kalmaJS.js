const logo = document.querySelector("#logo")
// creates the logo
function Kalma(props) {
    return (
        <div className={props.kalma} >
            {props.children}
        </div>
    );
}

ReactDOM.render (
    <div>
        <Kalma kalma="title">Kalma</Kalma>
    </div>,
    logo
)

//start button
var choicesContainer = document.querySelector(".choice")

function Choices(props) {
    return (
        <div className={props.choice} >
            {props.children}
        </div>
    );
} 

ReactDOM.render (
    <div id="buttons">
        <a href="Welcome\welcome.html"><Choices choice="start animate__animated animate__bounce" >Let's Start</Choices></a>
    </div>,
    choicesContainer
) 

const words = [
    "A safe space for you to relax",
    "Time to Unwind",
    "Be Mindful",
    "Calm your mind",
    "Meditate"
];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // sets up interval
  componentDidMount() {
    this.interval = setInterval(this.updateWords, 4000); // change words every 4 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateWords = () => {
    this.setState((prevState) => {
      if (prevState.count === words.length - 1) {
        return { count: 0 };
      } 
        return { count: prevState.count + 1 };
      
    });
  };

  render() {
    return (
      <div >
        <div className="inBreathe">{words[this.state.count]}</div>
      </div>
    );
  }
}

ReactDOM.render (
    <div>
        <Welcome></Welcome>
    </div>,
    document.querySelector("#inBreathe")
) 





