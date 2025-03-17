import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import soccer1 from "../assets/robosoccere1.png";
import soccer2 from "../assets/robosoccere2.png";
import back1 from "../assets/bagroundmilestone.png";
const roboticsEvents = [
  {
    id: 1,
    title: "Robo Soccer",
    arena: "Artificial turf with goalposts",
    teamComposition: "2-4 members per team",
    robotMatchRules: "Robots must push the ball into opponent's goal to score",
    scoringAndPenalties:
      "Each goal = 10 points; aggressive behavior = -5 points",
    technicalAspects: "Max robot size: 30cm x 30cm; Wireless control allowed",
    restrictions: "No destructive mechanisms allowed",
    img: b1,
    backgroundImage: back1, // Background Image
    extraimg: [soccer1, soccer2],
    description:
      "RoboSoccer is a competitive event where manually controlled robots score goals while defending their own.",
  },
  {
    id: 2,
    title: "Pick and Place Challenge",
    arena: "Predefined area with objects to move",
    teamComposition: "2-4 members per team",
    robotMatchRules: "Pick objects and place them in target zones",
    scoringAndPenalties:
      "Each object placed correctly = 10 points; Dropping objects = -5 points",
    technicalAspects:
      "Max arm reach: 40cm; Autonomous and manual control allowed",
    restrictions: "No destructive gripping allowed",
    img: b2,
    backgroundImage: back1, // Background Image
    description:
      "An arena with obstacles where bots must pick up objects and strategically place them at designated locations.",
  },
  {
    id: 3,
    title: "Drone Racing",
    arena: "Outdoor obstacle course",
    teamComposition: "1-3 members per team",
    robotMatchRules: "Navigate through checkpoints in the shortest time",
    scoringAndPenalties:
      "Fastest finish = 30 points; Missing checkpoint = -10 points",
    technicalAspects: "Max weight: 2kg; FPV camera recommended",
    restrictions: "No GPS autopilot allowed",
    img: b3,
    backgroundImage: back1, // Background Image
    description:
      "An aerial obstacle course where drones compete to complete all obstacles in the shortest time.",
  },
  {
    id: 4,
    title: "RC Racing",
    arena: "Racing track with obstacles",
    teamComposition: "1-3 members per team",
    robotMatchRules: "Complete the track in the shortest time possible",
    scoringAndPenalties:
      "Fastest finish = 20 points; Hitting obstacles = -5 points",
    technicalAspects: "Max speed: 5 m/s; Wireless control allowed",
    restrictions: "No external assistance allowed",
    img: b4,
    backgroundImage: back1, // Background Image
    description:
      "Participants race remote-controlled cars around a track, navigating various challenges.",
  },
  {
    id: 5,
    title: "Maze Solver",
    arena: "Predefined maze with checkpoints",
    teamComposition: "1-3 members per team",
    robotMatchRules: "Navigate through the maze autonomously",
    scoringAndPenalties:
      "Fastest completion = 20 points; Wrong path = -2 points",
    technicalAspects:
      "Max robot size: 25cm x 25cm; Sensors required for navigation",
    restrictions: "No manual intervention allowed",
    img: b5,
    backgroundImage: back1, // Background Image
    description:
      "A large racing track where participants race to complete laps in the fastest time.",
  },
  {
    id: 6,
    title: "3D Printing",
    arena: "Workshop area with 3D printers",
    teamComposition: "Open participation",
    robotMatchRules: "Participants learn about and operate 3D printers",
    scoringAndPenalties: "Not applicable",
    technicalAspects: "Use of CAD software and slicers",
    restrictions: "No external parts except filament allowed",
    img: b6,
    backgroundImage: back1, // Background Image
    description:
      "Dive into the world of 3D printing, learning about layer-by-layer object creation from digital models.",
  },
  {
    id: 7,
    title: "Arduino Workshop",
    arena: "Workshop area with Arduino kits",
    teamComposition: "Open participation",
    robotMatchRules: "Hands-on training with Arduino projects",
    scoringAndPenalties: "Not applicable",
    technicalAspects: "Basic programming in C/C++",
    restrictions: "No pre-built circuits allowed",
    img: b7,
    backgroundImage: back1, // Background Image
    description:
      "Explore embedded systems and sensor technology in a hands-on Arduino workshop.",
  },
  {
    id: 8,
    title: "AI & Machine Learning",
    arena: "Workshop area with computers",
    teamComposition: "Open participation",
    robotMatchRules: "Hands-on training with AI applications",
    scoringAndPenalties: "Not applicable",
    technicalAspects: "Python programming, TensorFlow basics",
    restrictions: "No pre-trained models allowed",
    img: b8,
    backgroundImage: back1, // Background Image
    description:
      "A workshop covering AI and machine learning, including hands-on training with real-world data applications.",
  },
];

export default roboticsEvents;
