import styles from "../Projects/ProjectsStyles.module.css";
import TicTacToe from "../../assets/tic-tac-toe.png";
import passGenerator from "../../assets/passwordgenerator1.png";
import Calculator from "../../assets/calculator1.png";
import ProjectCard from "../../common/ProjectCard";
import TripFinder from "../../assets/TripFinder.ico";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={TripFinder}
          link="https://github.com/CMPN-CODECELL/Syrus-2024-Web2-WebWarriors.git"
          h3="TripFinder"
          p="Itinerary Tourist App"
        />
        <ProjectCard
          src={TicTacToe}
          link="https://aditya-debugs.github.io/JS-Tic-Tac-Toe/"
          h3="Tic Tac Toe"
          p="Game"
        />
        <ProjectCard
          src={passGenerator}
          link="https://github.com/aditya-debugs/Password-Generator.git"
          h3="Pass-Generate"
          p="Random Password generator"
        />
        <ProjectCard
          src={Calculator}
          link="https://aditya-debugs.github.io/Calculator/"
          h3="Calculator"
          p="Calculator App"
        />
      </div>
    </section>
  );
}

export default Projects;
