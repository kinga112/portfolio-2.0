import gvi from "../assets/gvi2.jpg";
import casa from "../assets/casasystems_logo.png";
import broad from "../assets/broad_logo.png";
import winterLake from "../assets/image-grid/winterLake.jpeg";
import volcanoTree from "../assets/image-grid/volcanoTree.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/icons/resume.svg";
import resume from "../assets/Alden Resume 2026.pdf"
import eva from "../assets/eva_svg.svg"
import mbta from "../assets/mbta_logo.png"
import googleAssistant from "../assets/google_assistant_logo.png"
import python from "../assets/python_logo.png";
import aws from "../assets/aws_logo.png";
import dart from "../assets/dart_logo.svg";
import docker from "../assets/docker_logo.png";
import flutter from "../assets/flutter_logo.png";
import gcp from "../assets/gcp_logo.png";
import graphql from "../assets/graphql_logo.png";
import rust from "../assets/rust.svg";
import k8s from "../assets/kubernetes_logo.png";
import postgre from "../assets/postgre_logo.png";
import react from "../assets/react_logo.png";
import typescript from "../assets/typescript_logo.png";
import vue from "../assets/vue_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { GridItem } from "../components/Home/GridItem";

function Home() {
  const flexItemsCenter = 'w-full h-full md:flex place-items-center';
  const imageStyle = 'absolute inset-0 border-4 border-transparent pointer-events-none group-hover:border-orange-400 rounded-lg';

  return (
    <>
      <div
        className="md:h-screen md:w-screen h-full w-full flex flex-col md:p-10 p-4
                  bg-custom-forest-green md:grid md:grid-cols-10 md:grid-rows-10
                  gap-4 text-5xl text-custom-off-white overflow-auto"
      >
        <GridItem row={5} column={3} bgColor="green">
          <div className="w-full h-full flex flex-col gap-3 p-5">
            <div className="text-6xl text-custom-beige">Alden King</div>
            <div className="text-2xl font-light text-custom-forest-green">
              Software Engineer
            </div>
            <Link to="mailto:kinga112@yahoo.com" className="w-fit">
              <div className="flex flex-row place-items-center gap-2 hover:font-semibold text-lg">
                <img className="w-5 h-3 sm:w-7 sm:h-5" src={emailIcon} />
                kinga112@yahoo.com
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/kinga5" className="w-fit" target="_blank">
              <div className="flex flex-row place-items-center gap-2 hover:font-semibold text-lg">
                <img className="w-5 h-5 sm:w-7 sm:h-7" src={linkedin} />
                linkedin.com/in/kinga5
              </div>
            </Link>
            <Link to="https://www.github.com/kinga112" className="w-fit" target="_blank">
              <div className="flex flex-row gap-2 hover:font-semibold text-lg">
                <img className="w-5 h-5 sm:w-7 sm:h-7" src={github} />
                github.com/kinga112
              </div>
            </Link>
            <Link to={resume} className="w-fit" target="_blank">
              <div className="flex flex-row gap-2 hover:font-semibold text-lg">
                <img className="w-5 h-5 sm:w-7 sm:h-7" src={resumeIcon} />
                resume
              </div>
            </Link>
          </div>
        </GridItem>
        <GridItem row={5} column={2}>
          <div className="w-full h-full rounded-lg relative inline-block overflow-hidden group">
            <img
              className="object-cover block w-full h-full"
              src={winterLake}
            />
            <div className={imageStyle}></div>
          </div>
        </GridItem>
        <GridItem row={3} column={2} bgColor="green">
          <Link to="/travel" className={flexItemsCenter + " justify-center text-3xl text-custom-beige p-4"}>
            Travel Adventures
          </Link>
        </GridItem>
        <GridItem row={3} column={3} bgColor="beige">
          <Link to="/mission" className={flexItemsCenter + " justify-center text-3xl text-custom-forest-green"}>
            I am on a Mission!
          </Link>
        </GridItem>
        <GridItem row={2} column={5} bgColor="green">
          <HashLink to="experience#projects" className={flexItemsCenter + " flex-col gap-3 justify-justify-between"}>
            <div className="w-full max-sm:flex max-sm:flex-row max-sm:justify-evenly lg:bg-red-500 md:bg-white sm:bg-purple-500 flex">
              <div className="md:flex font-cliqu3 text-custom-cliqu3-bg bg-custom-cliqu3-text p-3 h-20 rounded-lg place-items-center text-2xl">C&nbsp;L&nbsp;I&nbsp;Q&nbsp;U&nbsp;3</div>
              <div className="md:flex flex-col font-serif text-white bg-black p-3 h-20 rounded-lg place-items-center text-2xl">
                <img className="w-10 h-10 -mb-2" src={eva} />
                <div>Mail·E</div>
              </div>
            </div>
            <div className="w-full max-sm:flex max-sm:flex-row max-sm:justify-evenly lg:bg-green-500 md:bg-white sm:bg-purple-500 flex justify-evenly">
              <div className="sm:row-span-1 sm:col-span-2 md:flex text-custom-excuria-text bg-custom-excuria-bg p-3 h-20 rounded-lg place-items-center text-2xl">Excursia</div>
              <div className="sm:row-span-2 sm:col-span-2 md:flex p-3 h-20 rounded-lg place-items-center bg-white">
                <img className="w-16 h-16" src={mbta} />
                <img className="w-20 h-16" src={googleAssistant} />
                </div>
            </div>
          </HashLink>
        </GridItem>
        <GridItem row={5} column={2} bgColor="green">
          <HashLink to="experience#career" className={flexItemsCenter + " flex-col justify-around p-5"}>
            <img className="h-28 w-fit object-cover rounded-xl" src={gvi} />
            <img src={casa} />
            <img src={broad} />
          </HashLink>
        </GridItem>
        <GridItem row={5} column={5} bgColor="beige">
          <HashLink to="experience#skills" className={flexItemsCenter + " flex-col gap-5 justify-center p-5"}>
            <div className="w-full h-full flex flex-col justify-around">
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <img className="h-20 w-20" src={python} />
                  <img className="h-20 w-20" src={typescript} />
                  <img className="h-20 w-20" src={rust} />
                  <img className="h-20 w-20" src={dart} />
                </div>
                <div className="flex gap-5">
                  <img className="h-20 w-20" src={react} />
                  <img className="h-20 w-20" src={vue} />
                  <img className="h-20 w-20" src={flutter} />
                </div>
              </div>
              <div className="flex justify-between place-items-center">
                <img className="h-20 w-20" src={postgre} />
                <img className="h-20 w-20" src={graphql} />
                <img className="h-20 w-20" src={aws} />
                <img className="h-16 w-20" src={gcp} />
                <img className="h-20 w-20" src={k8s} />
                <img className="h-16 w-20" src={docker} />
              </div>
            </div>
          </HashLink>
        </GridItem>
        <GridItem row={5} column={3}>
          <div className="w-full h-full overflow-hidden relative inline-block group">
            <img className="object-cover block w-full h-full" src={volcanoTree} />
            <div className={imageStyle}></div>
          </div>
        </GridItem>
      </div>
    </>
  );
}

export default Home;
