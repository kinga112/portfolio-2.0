import { Link, Outlet } from "react-router-dom";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavBarUtils";
import { useState } from "react";
import resume from "../assets/resume.pdf"
import maile from "../assets/projects/maile.png"
import q from "../assets/projects/q.png"
import mbta from "../assets/projects/mbta.png"
import excursia from "../assets/projects/excursia.png"
import menu from "../assets/icons/menu.svg"
import arrow from "../assets/icons/arrow.svg"

function NavBar() {
  const [active, setActive] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false)
  const [showMe, setShowMe] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  return (
    <>
      {/* for large screens */}
      <div className='fixed top-3 w-full flex items-center justify-center z-50 invisible sm:visible'>
        <div className="flex place-items-center w-[calc(100%-5rem)] p-3 bg-custom rounded-md h-14 shadow-lg shadow-[#0e1111]">
          <Link to="/">Home</Link>
          <div className='flex justify-center w-full'>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Me">
                <div className="flex flex-col space-y-4">
                  {/* <HoveredLink to="/resume">Resume</HoveredLink> */}
                  <a className="text-neutral-700 hover:text-black" href={resume} target='_blank' rel="noopener noreferrer">Resume</a>
                  {/*Todo: mission page <HoveredLink to="/mission">Mission</HoveredLink> */}
                  <div  className="text-gray-400 cursor-not-allowed">Mission</div>
                  <HoveredLink to="/music">Music</HoveredLink>
                  {/*Todo: travel page <HoveredLink to="/travel">Travel</HoveredLink> */}
                  <div className="text-gray-400 cursor-not-allowed">Travel</div>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Projects">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Mail&#x2022;E"
                    href=""
                    src={maile}
                    description="Desktop mail client with built in AI assistant"
                  />
                  <ProductItem
                    title="Q"
                    href="https://q.aldenwking.com"
                    src={q}
                    description="Create and manage queues"
                  />
                  <ProductItem
                    title="Excursia"
                    href=""
                    src={excursia}
                    description="Randomly generated running and bike routes determined by user's desired distance"
                  />
                  <ProductItem
                    title="Google Home MBTA"
                    href="https://medium.com/@a.king.11298/custom-voice-commands-for-google-assistant-with-python-9d931e5017e5"
                    src={mbta}
                    description="Custom Google Home voice commands to provide real-time updates on train arrival times using the MBTA API"
                  />
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      {/* small screens */}
      <div className='absolute top-3 w-full flex items-center justify-center z-50 visible sm:invisible'>
        <div className="flex place-items-center w-[calc(100%-5rem)] p-3 bg-custom rounded-md h-14 shadow-lg shadow-[#0e1111]">
          <button>
            <img onClick={() => setShowMenu(!showMenu)} className="h-10 w-10" src={menu}/>
          </button>
        </div>
      </div>
      <div className={"absolute w-full h-full bg-gray-900 z-40 px-5 py-20 visible sm:invisible " + (showMenu ? 'visible' : 'invisible') }>
        <div className="flex flex-col justify-center place-items-start w-60 px-5 text-lg">
          <Link onClick={() => setShowMenu(false)} className="bg-custom p-2 rounded w-full mb-3" to="/">Home</Link>
          <button onClick={() => setShowMe(!showMe)} className="flex justify-between place-items-start bg-custom p-2 rounded w-full mb-3">
            Me
            <img className={"h-8 w-8 duration-75 " + (showMe ? 'rotate-90' : '')} src={arrow}/>
          </button>
          {
            showMe ? 
            <div className="flex flex-col gap-3 pl-3 justify-center place-items-start pb-3">
              <a href={resume} target='_blank' rel="noopener noreferrer">Resume</a>
              <button className="text-gray-500 cursor-not-allowed" disabled={true}>Mission</button>
              <a href='/music'>Music</a>
              <button className="text-gray-500 cursor-not-allowed" disabled={true}>Travel</button>
            </div> : 
            <div/>
          }
          <button onClick={() => setShowProjects(!showProjects)} className="flex justify-between place-items-start bg-custom p-2 rounded w-full mb-3">
            Projects
            <img className={"h-8 w-8 duration-75 " + (showProjects ? 'rotate-90' : '')} src={arrow}/>
          </button>
          {
            showProjects ? 
            <div className="flex flex-col gap-2 pl-3 justify-center place-items-start pb-3">
              <a href="">Mail&#x2022;E</a>
              <a href="https://q.aldenwking.com">Q</a>
              <a href="">Excursia</a>
              <a href="https://medium.com/@a.king.11298/custom-voice-commands-for-google-assistant-with-python-9d931e5017e5">Google Home MBTA</a>
            </div> : 
            <div/>
          }
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default NavBar;