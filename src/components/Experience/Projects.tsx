import { Link } from 'react-router-dom';
import cliqu3 from "../../assets/projects/cliqu3.png"
import maile from "../../assets/projects/maile.png"
import q from "../../assets/projects/q.png"
import mbta from "../../assets/projects/mbta.png"
import excursia from "../../assets/projects/excursia.png"


export function Projects(){
  return(
    <>
      <section id='projects' className='flex flex-col justify-center w-full p-2 md:py-8 md:px-10 gap-20'>
        <div className='text-center font-extralight sm:text-5xl text-3xl -mb-10'>
          Projects
        </div>
        <Project
          name='Cliqu3'
          gitlink='https://github.com/kinga112/cliqu3-rust'
          pic={cliqu3}
          shortDesc='Desktop Application'
          longDesc='A secure, decentralized/p2p alternative to Discord and Slack built with Rust, Tauri,
                      and Web3 protocols. Cliqu3 replaces centralized servers with peer-to-peer
                      communications and cryptographic identity, featuring fully encrypted text
                      messaging, high-performance p2p voice streaming, and gas-efficient identity
                      registry contracts.'
        >
          <div className='text-3xl font-light'>
            Technical Architecture & Core Features
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              1. Cryptographic Identity & Wallet Authentication
            </div>
            <div className=''>
              Decentralized Sign-In: Leverages WalletConnect to authenticate users directly through
              their Ethereum-compatible wallets, removing the need for traditional email/password databases.
            </div>
            <div className=''>
              Arbitrum Stylus Identity Registry: To bypass high costs associated with ENS or Solana Name Service,
              Cliqu3 implements a custom Arbitrum Stylus smart contract written in Rust. This contract compiles to
              WebAssembly (WASM), allowing users to register profiles (usernames, descriptions, and avatars) with
              order-of-magnitude cheaper gas costs than traditional EVM setups.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              2. End-to-End Encrypted Text Messaging
            </div>
            <div className=''>
              The XMTP Protocol: Powering the secure text engine. Every message sent through the
              community group channels is end-to-end encrypted, sign-verified, and deliverable across
              a peer-to-peer network, ensuring absolute user privacy and message delivery guarantees.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              3. High-Performance Peer-to-Peer Voice Streaming
            </div>
            <div className=''>
              Media over QUIC with Iroh: Voice channels leverage the Iroh protocol to establish direct,
              low-latency peer-to-peer connections. By utilizing MoQ transport, Cliqu3 handles
              real-time audio streaming directly between peers without relying on
              centralized voice servers.
            </div>
          </div>
          <div className='text-3xl font-light'>
            Project Evolution & Architectural Journey
          </div>
          <div className='text-lg'>
            The current Rust and Tauri architecture of Cliqu3 is the result of a engineering journey,
            tracing the evolution of decentralized infrastructure and cross-platform desktop frameworks.
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              Iteration 1: The Flutter Concept - Web2/Web3
            </div>
            <div className=''>
              The Spark: When Flutter 2.0 released its early desktop beta, I built the initial prototype
              of Cliqu3. The goal was to build NFT gated community text channels.
            </div>
            <div className=''>
              The Compromise: Because decentralized storage and peer-to-peer synchronization protocols were
              in their infancy for desktop UI frameworks, the original backend relied on traditional,
              centralized Web2 databases. The user authenticated with a wallet, but the data storage
              remained centralized. This gap drove me to search for true p2p storage and sync options.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              Iteration 2: Electron and Decentralized Messaging
            </div>
            <div className=''>
              The Pivot: To achieve true wallet-to-wallet encrypted messaging, I migrated the application
              to Electron. This allowed me to leverage Push Protocol (formerly EPNS). At the time,
              Push’s SDKs and cryptographic primitives were strictly optimized for Node.js and browser environments.
            </div>
            <div>
              The Trade-off: While this successfully decoupled Cliqu3 from centralized databases, Electron brought
              the notorious trade-offs of chromium-bundled runtimes: heavy memory usage, bloated binary sizes, and
              high CPU idle states.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              Iteration 3: Rust, Smart Contracts and Fully Decentralized
            </div>
            <div className=''>
              The Breakout: As the Rust ecosystem matured, two critical developments changed the project’s
              trajectory: the release of Iroh and a stable Rust port of the XMTP SDK.
            </div>
            <div>
              The Final Stack: I have been rewriting the app. I replaced Electron with Tauri and Rust to
              drop the idle memory footprint to a fraction of its former size. I built local p2p voice
              channels over Iroh, integrated XMTP for secure serverless text, and moved user profiles onto
              an Arbitrum Stylus L2 smart contract written in Rust.
            </div>
          </div>
        </Project>
        <Project
          name='Mail·E'
          gitlink='https://github.com/kinga112/mail-e'
          pic={maile}
          shortDesc='Desktop Application'
          longDesc='A resource-light, multi-provider desktop email client built using
                      Python and React. MAIL-E leverages local SQLite caching for instantaneous
                      email queries, implements secure Gmail and Outlook OAuth 2.0 protocols,
                      and features an experimental, custom-engineered AI pipeline designed to
                      bypass API paywalls for automated email composition.'
        >
          <div className='text-3xl font-light'>
            Technical Architecture & Core Features
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              1. Modern Desktop Hybrid Architecture
            </div>
            <div className=''>
              The Eel Framework Bridge: Instead of shipping a heavy, Chromium-packaged Electron application,
              MAIL-E utilizes Eel. This mounts a lightweight Python backend that communicates bi-directionally
              with a responsive React frontend via WebSockets, resulting in a drastically reduced system memory footprint.
            </div>
            <div className=''>
              Secure OAuth Integration: Implemented secure OAuth authentication flows specifically tailored for Gmail and
              Outlook, managing access tokens securely to allow robust, passwordless protocol connections.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              2. Local Indexing & Caching Engine
            </div>
            <div className=''>
              SQLite Database: Rather than repeatedly polling slow IMAP servers for message trees, MAIL-E implements
              a local SQLite cache. It fetches, parses, and indexes incoming emails locally, enabling instantaneous
              inbox searches, sorting, and offline readability.
            </div>
            <div className=''>
              Bidirectional Sync: Successfully engineered asynchronous background workers in Python using native
              protocols (imaplib and smtplib) to securely download, parse, and dispatch mail.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              3. Proof-of-Concept AI Assistant Server
            </div>
            <div className=''>
              The "Paywall-Free" AI Pipeline: Designed an experimental AI helper to draft professional emails.
              Rather than relying on paid OpenAI API keys, I built a custom web-scraping assistant server that
              programmatically interacts with LLM web interfaces.
            </div>
            <div className=''>
              Contextual Guardrails: The scraper server accepts writing guidelines (tone, constraints, and prompt details),
              feeds them into the model interface, and parses the output to return a clean, context-aware draft directly
              to the user's composer window.
            </div>
          </div>
        </Project>
        <Project
          name='Excursia'
          gitlink='https://github.com/kinga112/excursia'
          pic={excursia}
          shortDesc='Mobile Application'
          longDesc="A cross-platform mobile application built with Flutter and Dart that generates unique,
                      randomized running and cycling paths. By combining a custom-engineered, constrained
                      random-walk vector algorithm with the OpenRouteService API, Excursia generates
                      natural-feeling routes that match a user's target distance while ensuring paths
                      stay on physical, traversable roads."
        >
          <div className='text-3xl font-light'>
            Technical Architecture & Core Features
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              1. The Dynamic Routing Engine
            </div>
            <div className=''>
              The core of Excursia is a custom Dart-based routing class (RandomRoute) designed to generate
              continuous spatial waypoints without backtracking. The algorithm behaves like an intelligent
              random walk, constructing a forward-moving trajectory step-by-step:
            </div>
            <div className=''>
              Polar Initialization: The first waypoint is generated using polar coordinates within a tight
              boundary around the user's initial location. By multiplying a base radius of 0.005 degrees
              by the square root of a random double, the app ensures a uniform distribution of initial directions:
            </div>
            <div className=''>
              Vector Extension: For every subsequent step, the algorithm analyzes the previous two coordinates,
              $(x_1, y_1)$ and $(x_2, y_2)$, to determine the user's current heading. It projects this heading
              forward by a constant scaling factor ($c = 0.003$ degrees, roughly 330 meters) to calculate an
              extended target node $(x, y)$.
            </div>
            <div className=''>
              Rotational Cone Boundaries: The extended coordinate is passed into a rotation matrix. By rotating
              this forward vector $+30^\circ$ and $-30^\circ$ around the last recorded coordinate as the origin,
              the algorithm dynamically calculates the left and right boundaries of a $60^\circ$ directional cone.
            </div>
            <div className=''>
              Constrained Random Selection: The next coordinate is selected within this forward-facing cone,
              ensuring that the path continuously makes forward progress instead of doubling back on itself
              or zig-zagging chaotically.
            </div>
          </div>
          <div className='flex flex-col md:px-10 gap-3'>
            <div className='text-xl'>
              2. Integration with OpenRouteService
            </div>
            <div className=''>
              Coordinate Serialization: Once the algorithmic engine generates the raw mathematical coordinates,
              they are structured as ORSCoordinate objects.
            </div>
            <div className=''>
              Road Snapping: These coordinates are dispatched to the OpenRouteService API. The API "snaps"
              the raw mathematical vectors to the nearest actual sidewalks, trails, or roads, converting a
              theoretical spatial path into a safe, real-world route.
            </div>
            <div className=''>
              Distance Matching: The app iteratively generates paths and queries the API until the cumulative
              road distance of the snapped route matches the user’s requested target distance within a tight
              margin of error.
            </div>
          </div>
        </Project>
        <Project
          name='MBTA Voice'
          gitlink='https://github.com/kinga112/mbta-voice'
          pic={mbta}
          shortDesc='Voice Activated Transit Assistant'
          longDesc='A Python-based integration that bridges real-time public transit data with smart home
          ecosystems. The MBTA API was used to fetch live train schedules and stream the parsed results
          directly to Google Assistant, providing hands-free, conversational transit updates.'
        >
          <p className="flex gap-2">
            <span>
              Click
            <Link className="text-custom-beige hover:underline" to="https://medium.com/@a.king.11298/custom-voice-commands-for-google-assistant-with-python-9d931e5017e5?source=friends_link&sk=6d0ed84f24bc65b1971ff5bd429e7998" target="_blank">
              &nbsp;HERE&nbsp;
            </Link>
              to read the Medium Article I wrote which describes the steps taken to develope this program.
            </span>
          </p>
        </Project>
      </section>
    </>
  )
}

interface ProjectProps {
  name: string;
  gitlink: string;
  pic: string;
  shortDesc: string;
  longDesc: string;
  children?: React.ReactNode;
}

function Project({ name, gitlink, pic, shortDesc, longDesc, children }: ProjectProps) {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className="flex gap-10 place-items-center">
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-col gap-5 justify-center'>
              <Link to={gitlink} target='_blank' className='text-3xl hover:underline text-custom-light-green w-fit'>
                {name}
              </Link>
              <div className='text-xl font-light'>
                {shortDesc}
              </div>
              <div className='text-lg'>
                {longDesc}
              </div>
            </div>
            <img className="w-96 h-52 rounded" src={pic} />
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
