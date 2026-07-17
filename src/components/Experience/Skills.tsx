// import Skill from "./Skill"
import python from "../../assets/python_logo.png";
import aws from "../../assets/aws_logo.png";
import dart from "../../assets/dart_logo.svg";
import docker from "../../assets/docker_logo.png";
import flutter from "../../assets/flutter_logo.png";
import gcp from "../../assets/gcp_logo.png";
import graphql from "../../assets/graphql_logo.png";
import k8s from "../../assets/kubernetes_logo.png";
import nginx from "../../assets/nginx_logo.webp";
import postgre from "../../assets/postgre_logo.png";
import react from "../../assets/react_logo.png";
import typescript from "../../assets/typescript_logo.png";
import vercel from "../../assets/vercel_logo.png";
import vue from "../../assets/vue_logo.png";
import rust from "../../assets/rust.svg";

function Skills() {
  return (
    <>
      <section id="skills" className="flex flex-col justify-center w-full space-y-5">
        <div className="flex justify-center font-extralight text-5xl pb-5">
          Skills
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3 sm:gap-5">
          <div className="flex-col justify-center space-y-3 lg:pr-10">
            <div className="flex justify-center lg:pr-[calc(10rem)] lg:justify-end text-xl">
              programming languages
            </div>
            <div className="flex justify-center lg:justify-end gap-3 sm:gap-5">
              <SkillGroup
                imgList={[python, typescript, rust, dart]}
                descriptionList={["Python", "TypeScript", "Rust", "Dart"]}
              />
            </div>
          </div>
          <div className="flex-col lg:pl-10 justify-center space-y-3">
            <div className="flex lg:pl-[calc(9.5rem)] lg:justify-start justify-center text-xl">
              frameworks
            </div>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-5">
              <SkillGroup
                imgList={[react, vue, flutter]}
                descriptionList={["React", "Vue", "Flutter"]}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center text-xl">backend / tools</div>
        <div className="grid grid-row-1 lg:grid-cols-2 w-full gap-3 sm:gap-5">
          <div className="flex justify-center sm lg:justify-end gap-3 sm:gap-5">
            <SkillGroup
              imgList={[postgre, graphql, aws, gcp]}
              descriptionList={[
                "PostgreSQL",
                "GraphQL",
                "Amazon Web Services",
                "Google Cloud Platform",
              ]}
            />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-5">
            <SkillGroup
              imgList={[k8s, docker, vercel, nginx]}
              descriptionList={["Kubernetes", "Docker", "Vercel", "Nginx"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

function Skill(props: { image: string; description: string; index: number }) {
  const skillStyle = `text-custom-forest-green text-xs md:text-sm font-semibold
    text-center h-full w-full bg-custom-light-green
    rounded-xl flex flex-col p-4 place-items-center`;

  let imageSize = "flex-1 min-w-0 aspect-square object-contain md:w-16";
  // if (props.image == gcp || props.image == docker) {
  //   imageSize = "w-10 h-8 sm:w-16 sm:h-12 m-2";
  // }

  return (
    <>
      <div className="w-20 h-28 sm:w-32 sm:h-40 group">
        <div className={skillStyle}>
          <img
            className={
              "md:duration-300 md:group-hover:scale-110 md:group-hover:rotate-12 rounded-md " +
              imageSize
            }
            src={props.image}
          />
          {props.description}
        </div>
      </div>
    </>
  );
}

export function SkillGroup(props: {
  imgList: Array<string>;
  descriptionList: Array<string>;
}) {
  const items = props.imgList.map((image: string, index: number) => (
    <Skill
      image={image}
      description={props.descriptionList[index]}
      index={index}
    />
  ));
  return <>{items}</>;
}
