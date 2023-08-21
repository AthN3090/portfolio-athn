const projectData = [
  {
    name: (
      <>
        Write-er{" "}
        <i class="em em-memo" style={{ height: "32px" }} aria-label="MEMO"></i>
      </>
    ),
    img: "/images/writer-img.PNG",
    imgPos:"left",
    tagline: "A simple blogging application based on react-markdown.",
    description: (
      <>
        Write-er is a minimal blogging website based on react-markdown.
        Developed with MERN stack.
        <br />
        <br />
        Features implemented:
        <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
          <li>
            <span style={{ fontWeight: "bold" }}>Text editor</span> -
            Implemented using react-markdown. Users can create, edit and delete
            their posts.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>User authentication</span> - It
            uses JWT(JSON Web Tokens) for authentication. Passwords are
            encrypted using bcrypt.{" "}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Post Filtering</span> -
            Filtering based on the topic tag of the post.
          </li>
        </ul>
      </>
    ),
    tags: [
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="react"
      ></img>,

      <img
        className="stack-tag"
        src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="tailwindcss"
      ></img>,

      <img
        className="stack-tag"
        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
        alt="mongo"
      ></img>,

      <img
        className="stack-tag"
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
        alt="express"
      ></img>,

      <img
        className="stack-tag"
        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
        alt="node"
      ></img>,
    ],
    github: "https://github.com/AthN3090/write-er-app",
    live: "https://write-er-app.vercel.app/",
  },
  {
    name: (
      <>
        Heiwa
        <i className="em em-dove_of_peace" style={{ height: "32px" }}></i>
      </>
    ),
    img: "/images/heiwa-img.png",
    imgPos:"left",
    tagline:
      " An end-to-end chat application where people talk about their mental",
    description: (
      <>
        Heiwa is a messaging platform for people to talk about their mental
        health and connect with people going through a similar phase.
        <br />
        <br />
        Features implemented:
        <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
          <li>Random matching</li>
          <li>Chat component</li>
          <li>Multiuser whiteboard for doodling</li>
        </ul>
      </>
    ),
    tags: [
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="react"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
        alt="express"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
        alt="socket"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
        alt="node"
      ></img>,
    ],
    github: "https://github.com/AthN3090/Heiwa-react",
    live: "https://heiwa.vercel.app/",
  },
  {
    name: (
      <>
        PinItUp{" "}
        <i
          class="em em-pushpin"
          style={{ height: "32px" }}
          aria-label="PUSHPIN"
        ></i>
      </>
    ),
    img: "/images/pinitup-img.png",
    imgPos:"right",
    tagline: " Bookmark extension for chromium browsers.",
    description: (
      <>
        PinItUp is a modern bookmarking extension that helps you organize your
        bookmarks all in one place with ease. <br />
        <br />
        Features implemented:
        <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
          <li>Intuitive user interface</li>
          <li>Organize bookmarks into different folders</li>
          <li>Bookmark all currently active tabs Bookmark selected tabs</li>
        </ul>
      </>
    ),
    tags: [
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        alt="react"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white"
        alt="chrome"
      ></img>,
    ],
    github: "https://github.com/AthN3090/PinItUp-extension",
    live: "https://chrome.google.com/webstore/detail/pinitup/bdlikbaegahppphbllkecmegphbaodnm",
  },
  {
    name: (
      <>
        Save-me{" "}
        <i
          className="em em-cloud"
          aria-label="CLOUD"
          style={{ height: "32px" }}
        ></i>
      </>
    ),
    img: "/images/save-me-img.png",
    imgPos:"left",
    tagline: "Command line tool for saving your workfiles in the cloud.",
    description: (
      <>
        A CLI tool that enables users to save their incomplete work from public
        workspaces, such as office or school labs, and download the files to
        their personal systems for later use.
        <br />
        <br />
        Features implemented:
        <ul style={{ paddingLeft: "25px", listStyleType: "square" }}>
          <li>
            Utilizes Firebase's Firestore to store multiform data, including
            user registration information and uploaded files.
          </li>
          <li>
            Users can upload, download and delete their files from the cloud
            storage.
          </li>
        </ul>
      </>
    ),
    tags: [
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        alt="react"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
        alt="express"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
        alt="node"
      ></img>,
      <img
        className="stack-tag"
        src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
        alt="react"
      ></img>,
    ],
    github: "https://github.com/AthN3090/save-me",
    live: "",
  },{
    name: (
        <>
          Minesweeper React{" "}
                <i
                  class="em em-bomb"
                  style={{ height: "32px" }}
                  aria-label="BOMB"
                ></i>
        </>
      ),
      img: "/images/minesweeper.png",
      imgPos:"top",
      tagline: "An implementation of the classic minesweeper game with React.",
      description: (
        <>
          An implementation of the classic minesweeper game with React.
        </>
      ),
      tags: [
        <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>,
                  <img
                    className="stack-tag"
                    src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"
                    alt="TypeScript"
                  ></img>
                  
      ],
      github: "https://github.com/AthN3090/minesweeper-ts",
      live: "https://minesweeper-ts-navy.vercel.app/",
  }
];

export default projectData;
