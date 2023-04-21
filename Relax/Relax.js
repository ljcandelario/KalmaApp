const choicesContainer = document.querySelector("#choices")
const logo2 = document.querySelector("#logo2")
const breatheContainer = document.querySelector("#breathContainer")
const relaxContainer = document.querySelector("#relaxContainer")
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
/*
class CircleContainer extends React.Component {
    render () {
        return (
            <div className="circleContainer">
                <SmallCircle /> 
                <LargeCircle inner="largeCircle"/>
            </div> // 25 to 195
    )}
}*/

class SmallCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          circleClass: props.CircleColor, //class of circle
          isMoving: false
        };
      }
    
      animateCircle = () => {
        this.setState({
          circleClass: props.CircleColor, //triggers state change, but I need to keep the same class with the animation
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
            <div className={this.props.CircleColor}></div>
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

function RenderPurpleCircle() {
    return (
        ReactDOM.render(
            <div className="circleContainer">
                <SmallCircle CircleColor="purpleCircle"></SmallCircle>
                <LargeCircle inner="largeCircle"></LargeCircle>
            </div>,
            //CircleColor="purpleCircle"/>
        document.querySelector("#circleArea")
        )
    );
}

function RenderRedCircle() {
    return (
        ReactDOM.render(
            <div className="circleContainer">
                <SmallCircle CircleColor="redCircle"></SmallCircle>
                <LargeCircle inner="largeCircle"></LargeCircle>
            </div>,
            //CircleColor="purpleCircle"/>
        document.querySelector("#circleArea")
        )
    );
}

function RenderGreyCircle() {
    return (
        ReactDOM.render(
            <div className="circleContainer">
                <SmallCircle CircleColor="greyCircle"></SmallCircle>
                <LargeCircle inner="largeCircle"></LargeCircle>
            </div>,
            //CircleColor="purpleCircle"/>
        document.querySelector("#circleArea")
        )
    );
}

function RenderOrangeCircle() {
    return (
        ReactDOM.render(
            <div className="circleContainer">
                <SmallCircle CircleColor="orangeCircle"></SmallCircle>
                <LargeCircle inner="largeCircle"></LargeCircle>
            </div>,
            //CircleColor="purpleCircle"/>
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

function Breaths(props) {
    return (
        <div className={props.desc}>
            {props.children}
        </div>
    ) 
    
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

function Breaths(props) {
    return (
        <div className={props.desc}>
            {props.children}
        </div>
    ) 
    
} 

ReactDOM.render (
    <div id="buttons">
        <div ><Choices choice="uneasy" >Uneasy</Choices></div>
        <div ><Choices choice="stressed">Stressed</Choices></div>
        <div ><Choices choice="anxious" >Anxious</Choices></div>
        <div ><Choices choice="burntOut" >Burnt Out</Choices></div>
    </div>,
    document.querySelector("#startButtonContainer")
)

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


function RenderBackButton(){
    return (
        ReactDOM.render(
            <div>
                <Choices choice="backButton"><a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>
           ,
            choicesContainer
        )
    )
}

/*
function RenderChoiceButtons5() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
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
                 <Choices choice="backButton"><a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
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
                <Choices choice="backButton"><a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            choicesContainer
        )
    )
}
*/


function RenderTimer5() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="5"></CountdownTimer></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        ) 
    );
}

function RenderTimer7() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="7"></CountdownTimer></Choices>
            </div>,
           document.querySelector("#startButtonContainer")
        ) 
    );
}

function RenderTimer10() {
    return (
        ReactDOM.render (
            <div>
                <Choices choice="timerbox"><CountdownTimer Time="10"></CountdownTimer></Choices>
            </div>,
           document.querySelector("#startButtonContainer")
        ) 
    );
}


/*
//5 mins set up
const choice1 = document.querySelector('.choice1')
choice1.addEventListener('click', () => {
    RenderChoiceButtons5(),
    RenderMessage()
})
*/




// 7 mins process
/*
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
*/
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


/* #ea9800 Orange*/ /* #1fb2e8  Blue*/ /*#0b1441 Dark blue for background */

 class ChangeBackground extends React.Component {
    
    componentDidMount() {
      document.body.style.backgroundColor =  this.props.bgcolor;
    }
  
    componentWillUnmount() {
      document.body.style.backgroundColor = "#0b1441";
    }
  
    render() {
      return (
        <div>
        </div>
      );
    }
  }

// Parent container
class InfoCard extends React.Component {
    render() {
        return (
            <div className={this.props.infoClass}>
                <h3>{this.props.children}</h3>
                <p>{this.props.child}</p>
            </div>
        )
    }
}



function RenderReady(){
    return(
        ReactDOM.render (
            <Breaths desc="breatheContainer">Are you ready?</Breaths>,
            document.querySelector("#breathContainer")
        )
    )
}

function RenderRelaxButtonUneasy() {
    return (
        ReactDOM.render(
            <div >
                <Choices choice="startButton"><h4 onClick={MeditationChoices1}> Relax</h4></Choices>
            </div>,
            choicesContainer
        )
    )
}

function RenderRelaxButtonStressed() {
    return (
        ReactDOM.render(
            <div >
                <Choices choice="startButton"><h4 onClick={MeditationChoices2}> Relax</h4></Choices>
            </div>,
            choicesContainer
        )
    )
}
function RenderRelaxButtonAnxious() {
    return (
        ReactDOM.render(
            <div >
                <Choices choice="startButton"><h4 onClick={MeditationChoices3}> Relax</h4></Choices>
            </div>,
            choicesContainer
        )
    )
}

function RenderRelaxButtonBurntOut() {
    return (
        ReactDOM.render(
            <div >
                <Choices choice="startButton"><h4 onClick={MeditationChoices4}> Relax</h4></Choices>
            </div>,
            choicesContainer
        )
    )
}
function RenderTimeOptionsUneasy() {
    ReactDOM.render (
     <div id="buttons">
         <div onClick={StartScreen5Uneasy}><Choices choice="choice1" >5 Minutes</Choices></div>
         <div onClick={StartScreen7Uneasy}><Choices choice="choice2">7 Minutes</Choices></div>
         <div onClick={StartScreen10Uneasy}><Choices choice="choice3" >10 Minutes</Choices></div>
     </div>,
     document.querySelector("#startButtonContainer")
 ) }



 function RenderTimeOptionsAnxious() {
    ReactDOM.render (
     <div id="buttons">
         <div onClick={StartScreen5Anxious}><Choices choice="choice1" >5 Minutes</Choices></div>
         <div onClick={StartScreen7Anxious}><Choices choice="choice2">7 Minutes</Choices></div>
         <div onClick={StartScreen10Anxious}><Choices choice="choice3" >10 Minutes</Choices></div>
     </div>,
     document.querySelector("#startButtonContainer")
 ) }

 function RenderTimeOptionsBurntOut() {
    ReactDOM.render (
     <div id="buttons">
         <div onClick={StartScreen5BurntOut}><Choices choice="choice1" >5 Minutes</Choices></div>
         <div onClick={StartScreen7BurntOut}><Choices choice="choice2">7 Minutes</Choices></div>
         <div onClick={StartScreen10BurntOut}><Choices choice="choice3" >10 Minutes</Choices></div>
     </div>,
     document.querySelector("#startButtonContainer")
 ) }
 
 function RenderMessage(){
     return(
         ReactDOM.render (
             <Breaths desc="breatheContainer">Choose the length of the relaxation session</Breaths>,
             document.querySelector("#breathContainer")
         )
     )
 }

const uneasy = document.querySelector('.uneasy')
const stressed = document.querySelector('.stressed')
const anxious = document.querySelector('.anxious')
const burntOut = document.querySelector('.burntOut')

//uneasy flow and functions
uneasy.addEventListener("click", () => {
   RenderUneasyCard(),
   RenderRelaxButtonUneasy()
})

function RenderUneasyCard () {
    return (
        ReactDOM.render(
            <div className="adviceContainer">
               <InfoCard infoClass="uneasyCard">
                <div>
                    <h3>Uneasy thoughts</h3>
                    <p>Uneasy and nervous thoughts are actually natural and healthy reactions. Fundamentally, it keeps us safe from danger and risks.
                    However, it does more harm than good to our body when we consistently feel it. Common signs of uneasy and nervous thoughts
                    are body and muscle tension, dizziness, swating and short of breath. <br></br> <br></br>
                    To get a hold on the uneasy mind and body, a mindfulness practice is a great first step. Let's take a short relaxation 
                    exercise to calm the body and the mind.
                </p>
                </div>
              
               </InfoCard>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function RenderChoiceButtons5Uneasy() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5Uneasy}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function MeditationChoices1() {
    uneasyBackground(),
    RenderTimeOptionsUneasy(),
    RenderMessage()
}

function StartScreen5Uneasy() {
    RenderChoiceButtons5Uneasy(),
    RenderReady()
}

function StartMeditating5Uneasy() {
    return (
        RenderTimer5(),
        RenderBreaths(), //renders the breathe in and out
        RenderPurpleCircle(),
        RenderBackButton(),
        playMusic5() 
    )
} 

function uneasyBackground(){
    return (
        ReactDOM.render(
            <ChangeBackground bgcolor="#5d02d3"></ChangeBackground>,
            document.querySelector("#choices")
        ) 
    )
}
// 7 mins uneasy
function RenderChoiceButtons7Uneasy() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating7Uneasy}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function StartMeditating7Uneasy() {
    return (
        RenderTimer7(),
        RenderBreaths(), //renders the breathe in and out
        RenderPurpleCircle(),
        RenderBackButton(),
        playMusic7() 
    )
} 
function StartScreen7Uneasy() {
    RenderChoiceButtons7Uneasy(),
    RenderReady()
}

// uneasy 10 mins
function RenderChoiceButtons10Uneasy() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating10Uneasy}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function StartMeditating10Uneasy() {
    return (
        RenderTimer10(),
        RenderBreaths(), //renders the breathe in and out
        RenderPurpleCircle(),
        RenderBackButton(),
        playMusic10() 
    )
} 
function StartScreen10Uneasy() {
    RenderChoiceButtons10Uneasy(),
    RenderReady()
}

// stressed options

stressed.addEventListener("click", () => {
    RenderStressedCard(),
    RenderRelaxButtonStressed()
 })

function RenderStressedCard () {
    return (
        ReactDOM.render(
            <div className="adviceContainer">
               <InfoCard infoClass="stressedCard">
                <div>
                    <h3>Stressed</h3>
                    <p>Stress is a state of mental tension caused by worrying about certain situations. Stress is our body's natural way of pushing us
                        to tackle the challenges that life brings us. However, prolonged exposure to stress can affect our mood, cognitive functions and physical
                        health. Life is full of stress, but it is how we handle stress that determines how we can overcome it.  <br></br> <br></br>
                        Mindfulness breathing exercises can calm down our nervous system and give us a clear mind to tackle the daily stresses of daily life.
                        Let us take a few minutes to step away and do a deep breathing exercise so that we can face the challenges of life with a clear mind. 
                    </p>
                </div>
              
               </InfoCard>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}
function stressedBackground(){
    return (
        ReactDOM.render(
            <ChangeBackground bgcolor="#ff6200"></ChangeBackground>,
            document.querySelector("#choices")
        ) 
    )
}

function RenderTimeOptionsStressed() {
    ReactDOM.render (
     <div id="buttons">
         <div onClick={StartScreen5Stressed}><Choices choice="choice1" >5 Minutes</Choices></div>
         <div onClick={StartScreen7Stressed}><Choices choice="choice2">7 Minutes</Choices></div>
         <div onClick={StartScreen10Stressed}><Choices choice="choice3" >10 Minutes</Choices></div>
     </div>,
     document.querySelector("#startButtonContainer")
 ) }

//5 mins
function RenderChoiceButtons5Stressed() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5Stressed}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function MeditationChoices2() {
    stressedBackground(),
    RenderTimeOptionsStressed(),
    RenderMessage()
}

function StartScreen5Stressed() {
    RenderChoiceButtons5Stressed(),
    RenderReady()
}

function StartMeditating5Stressed() {
    return (
        RenderTimer5(),
        RenderBreaths(), //renders the breathe in and out
        RenderRedCircle(),
        RenderBackButton(),
        playMusic5() 
    )
} 

//7 mins
function RenderChoiceButtons7Stressed() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating7Stressed}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}


function StartScreen7Stressed() {
    RenderChoiceButtons7Stressed(),
    RenderReady()
}

function StartMeditating7Stressed() {
    return (
        RenderTimer7(),
        RenderBreaths(), //renders the breathe in and out
        RenderRedCircle(),
        RenderBackButton(),
        playMusic7() 
    )
} 
//10 minutes
function RenderChoiceButtons10Stressed() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating10Stressed}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}



function StartScreen10Stressed() {
    RenderChoiceButtons10Stressed(),
    RenderReady()
}

function StartMeditating10Stressed() {
    return (
        RenderTimer10(),
        RenderBreaths(), //renders the breathe in and out
        RenderRedCircle(),
        RenderBackButton(),
        playMusic10() 
    )
} 


 //anxious options
 
 anxious.addEventListener("click", () => {
    RenderAnxiousCard(),
    RenderRelaxButtonAnxious()
 })

 function RenderAnxiousCard () {
    return (
        ReactDOM.render(
            <div className="adviceContainer">
               <InfoCard infoClass="anxiousCard">
                <div>
                    <h3>Anxiety</h3>
                    <p>Anxiety is our body and mind's natural reaction to stressful and scary circumstances. Anxiety keeps us alert and ready for action.
                        However, when our body feels that we are in danger all the time, anxiety can get in the way of our normal routine and even our 
                        daily life.  <br></br> <br></br>
                        Recognizing the triggers and signs of anxiety can help us bring it down. Once we address that we are in an anxious state, we can
                        be mindful of what triggers it. Deep breathing can help us calm the body and mind down to reinforce that we are in a safe space.
                </p>
                </div>
              
               </InfoCard>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}
function anxiousBackground(){
    return (
        ReactDOM.render(
            <ChangeBackground bgcolor="#717171"></ChangeBackground>,
            document.querySelector("#choices")
        ) 
    )
}

//5mins

function RenderChoiceButtons5Anxious() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5Anxious}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function MeditationChoices3() {
    anxiousBackground(),
    RenderTimeOptionsAnxious(),
    RenderMessage()
}

function StartScreen5Anxious() {
    RenderChoiceButtons5Anxious(),
    RenderReady()
}

function StartMeditating5Anxious() {
    return (
        RenderTimer5(),
        RenderBreaths(), //renders the breathe in and out
        RenderGreyCircle(),
        RenderBackButton(),
        playMusic5() 
    )
} 

//7 mins
function RenderChoiceButtons7Anxious() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating7Anxious}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}



function StartScreen7Anxious() {
    RenderChoiceButtons7Anxious(),
    RenderReady()
}

function StartMeditating7Anxious() {
    return (
        RenderTimer7(),
        RenderBreaths(), //renders the breathe in and out
        RenderGreyCircle(),
        RenderBackButton(),
        playMusic7() 
    )
} 
//10 minutes
function RenderChoiceButtons10Anxious() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating10Anxious}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}



function StartScreen10Anxious() {
    RenderChoiceButtons10Anxious(),
    RenderReady()
}

function StartMeditating10Anxious() {
    return (
        RenderTimer10(),
        RenderBreaths(), //renders the breathe in and out
        RenderGreyCircle(),
        RenderBackButton(),
        playMusic10() 
    )
} 

 //Burnt Out
 burntOut.addEventListener("click", () => {
    RenderBurntOutCard(),
    RenderRelaxButtonBurntOut()
 })

 function RenderBurntOutCard () {
    return (
        ReactDOM.render(
            <div className="adviceContainer">
               <InfoCard infoClass="burntOutCard">
                <div>
                    <h3>Burnt Out</h3>
                    <p>Burnout is caused by constant and overwhelming stress that results in physical, emotional and mental exhaustion.
                        When the stress of responsibilities and expectations constantly weigh heavily over you, burnout will be inevitable  <br></br> <br></br>
                    Burnout can be addressed by taking time for self care and rest. We must understand that we are burnt out and need time to recover.
                    Let us take a few minutes to detach from out responsibilities and relax our mind and body.
                </p>
                </div>
              
               </InfoCard>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function burntOutBackground(){
    return (
        ReactDOM.render(
            <ChangeBackground bgcolor="#f00d05"></ChangeBackground>,
            document.querySelector("#choices")
        ) 
    )
}
//5 mins

function RenderChoiceButtons5BurntOut() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating5BurntOut}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}

function MeditationChoices4() {
    burntOutBackground(),
    RenderTimeOptionsBurntOut(),
    RenderMessage()
}

function StartScreen5BurntOut() {
    RenderChoiceButtons5BurntOut(),
    RenderReady()
}

function StartMeditating5BurntOut() {
    return (
        RenderTimer5(),
        RenderBreaths(), //renders the breathe in and out
        RenderOrangeCircle(),
        RenderBackButton(),
        playMusic5() 
    )
} 

//7mins

function RenderChoiceButtons7BurntOut() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating7BurntOut}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}


function StartScreen7BurntOut() {
    RenderChoiceButtons7BurntOut(),
    RenderReady()
}

function StartMeditating7BurntOut() {
    return (
        RenderTimer7(),
        RenderBreaths(), //renders the breathe in and out
        RenderOrangeCircle(),
        RenderBackButton(),
        playMusic7() 
    )
} 

//10 mins
function RenderChoiceButtons10BurntOut() {
    return (
        ReactDOM.render(
            <div>
                <Choices choice="startButton" ><h4 onClick={StartMeditating10BurntOut}>Start</h4></Choices>
                <Choices choice="backButton"> <a href="../Relax/Relax.html"><h4> Back</h4></a></Choices>
            </div>,
            document.querySelector("#startButtonContainer")
        )
    )
}



function StartScreen10BurntOut() {
    RenderChoiceButtons10BurntOut(),
    RenderReady()
}

function StartMeditating10BurntOut() {
    return (
        RenderTimer10(),
        RenderBreaths(), //renders the breathe in and out
        RenderOrangeCircle(),
        RenderBackButton(),
        playMusic10() 
    )
} 
