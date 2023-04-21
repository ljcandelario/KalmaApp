const choicesContainer = document.querySelector(".choices")
const logo2 = document.querySelector("#logo2")
const breatheContainer = document.querySelector("#breathContainer")
//renders logo
function Kalma(props) {

    return (
        <div className={props.kalma} >
            {props.children}
        </div>
    );
}
ReactDOM.render (
    <div>
        <Kalma kalma="title" fontS="5rem">Kalma</Kalma>
    </div>,
    logo2
)

//small circle that needs to change in size
class CircleContainer extends React.Component {
    render () {
        return (
            <div className="circleContainer">
                <SmallCircle/> 
                <LargeCircle inner="largeCircle"/>
            </div> // 25 to 195
    )}
}

class SmallCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          circleClass: 'smallCircle', //class of circle
          isMoving: false
        };
      }
    
      animateCircle = () => {
        this.setState({
          circleClass: 'smallCircle', //triggers state change, but I need to keep the same class with the animation
        });
      };
    
      // this method sets up the interval when the component mounts
      componentDidMount() {
        this.timer = setInterval(this.animateCircle, 6000); // 3s breathe in, 3 secs breathe out.
      }

      componentWillUnmount() {
        clearInterval(this.timer); // clears the interval after all 0s
      }
    
      render() {
        return (
            <div className={this.state.circleClass}></div>
        );
      }
    }

 
//Larger outer circle
class LargeCircle extends React.Component {
    render() {

        return (
            <div className={this.props.inner}>
            </div>
        )
    }
}

function RenderCircle() {
    return (
        ReactDOM.render(
            <CircleContainer />,
        document.querySelector("#circleArea")
        )
    );
}
const timer = document.querySelector("#timer")

class CountdownTimer extends React.Component{
    constructor(props, context){
        super(props, context);
          
        this.state = {
            minutes: props.Time, //changes per choice, 5 mins, 7 mins and 10 mins
            seconds: "00"
        }
        this.countdown = this.countdown.bind(this);
        
        this.secondsRemaining;
        this.intervalHandle;
    }

    countdown() {
        var mins = Math.floor(this.secondsRemaining / 60); //sets the minutes based on props.Time
        var secs = this.secondsRemaining - (mins * 60) //sets the secs
        
        this.setState({
            minutes : mins, //updates this.state minutes
            seconds: secs,  // updates this.state. seconds to secs
        });
        //adds 0 to front if single digit
        if (secs <10) {
            this.setState({
                seconds: "0" + this.state.seconds
            })
        }
        //finishes ti,er when all zeros
        if (mins === 0 && secs === 0) {
            clearInterval(this.intervalHandle);
        }

       this.secondsRemaining --; // subtracts time. 

    }

    componentDidMount() {
        setTimeout(() => {
            this.intervalHandle = setInterval(this.countdown, 1000)
        }, 0);

        let time = this.state.minutes
        this.secondsRemaining = time * 60
    }

    render () {
        return (
            <div>{this.state.minutes}:{this.state.seconds}</div>
        );
    } 
}

const words = [
    "Breathe In",
    "Breathe Out"
];
// fade in and fade out of words, 
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateWords, 3000); // change words every 3 seconds
  }
  // stops the interval
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
//renders choices
function Choices(props) {
    return (
        <div className={props.choice} >
            {props.children}
        </div>
    );
} 

ReactDOM.render (
    <div id="buttons">
        <div ><Choices choice="choice1" >5 Minutes</Choices></div>
        <div ><Choices choice="choice2">7 Minutes</Choices></div>
        <div ><Choices choice="choice3" >10 Minutes</Choices></div>
    </div>,
    choicesContainer
) 

function Breaths(props) {
    return (
        <div className={props.desc}>
            {props.children}
        </div>
    ) 
    
} 

function RenderBreaths(){
    return(
        ReactDOM.render (
            <div>
                <Welcome></Welcome>
            </div>,
            document.querySelector("#breathContainer")
        )
            
    )
} 

function RenderMessage(){
    return(
        ReactDOM.render (
            <Breaths desc="breatheContainer">Are you ready?</Breaths>,
            document.querySelector("#breathContainer")
        )
    )
}

function RenderChoiceButtons5() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Meditate/Meditate.html"><h4> Back</h4></a></Choices>
            </div>,
            choicesContainer
        )
    )
}

function RenderChoiceButtons7() {
    return (
        ReactDOM.render(
            <div >
                 <Choices choice="startButton" ><h4 onClick={StartMeditating7}>Start</h4></Choices>
                 <Choices choice="backButton"><a href="../Meditate/Meditate.html"><h4> Back</h4></a></Choices>
            </div>,
            choicesContainer
        )
    )
}

function RenderChoiceButtons10() {
    return (
        ReactDOM.render(
            <div >
                <Choices choice="startButton" ><h4 onClick={StartMeditating10}>Start</h4></Choices>
                <Choices choice="backButton"><a href="../Meditate/Meditate.html"><h4> Back</h4></a></Choices>
            </div>,
            choicesContainer
        )
    )
}

function RenderBackButton(){
    return (
        ReactDOM.render(
            <div>
                <Choices choice="backButton"><a href="../Meditate/Meditate.html"><h4> Back</h4></a></Choices>
            </div>
           ,
            choicesContainer
        )
    )
}

function RenderTimer5() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="5"></CountdownTimer></Choices>
            </div>,
            timer
        ) 
    );
}

function RenderTimer7() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="7"></CountdownTimer></Choices>
            </div>,
            timer
        ) 
    );
}

function RenderTimer10() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="10"></CountdownTimer></Choices>
            </div>,
            timer
        ) 
    );
}

//5 mins set up
const choice1 = document.querySelector('.choice1')
choice1.addEventListener('click', () => {
    RenderChoiceButtons5(),
    RenderMessage()
})

function StartMeditating5() {
    return (
        RenderTimer5(),
        RenderBreaths(),
        RenderCircle(),
        RenderBackButton(),
        playMusic5() 
    )
}
// 7 mins process
const choice2 = document.querySelector('.choice2')
choice2.addEventListener('click', () => {
    RenderChoiceButtons7(),
    RenderMessage()
})

function StartMeditating7() {
    return (
        RenderTimer7(),
        RenderBreaths(),
        RenderCircle(),
        RenderBackButton(),
        playMusic7() 
    )
}

//10 mins set up
const choice3 = document.querySelector('.choice3')
choice3.addEventListener('click', () => {
    RenderChoiceButtons10(),
    RenderMessage()
})

function StartMeditating10() {
    return (
        RenderTimer10(),
        RenderBreaths(),
        RenderCircle(),
        RenderBackButton(),
        playMusic10() 
    )
}

function playMusic5() {
    let music = new Audio("../Music/6 mins-music-for-relax-yoga-meditation-7783.mp3");
    music.play();
}

function playMusic7() {
    let music = new Audio("../Music/7 mins-ambiant-relax-sounds-10621.mp3");
    music.play();
}

function playMusic10() {
    let music = new Audio("../Music/10 mins-endless-by-prabajithk-118998.mp3");
    music.play();
}



