import WovenImageList from '../component/common/WovenImageList'
import styles from '../Info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { openInNewTab } from './helper'
import { faD, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import {
  awsIcon,
  bukuwarungImages,
  cppIcon,
  devpostLink,
  examImages,
  githubLink,
  gitIcon,
  instaLink,
  javaIcon,
  linkedInLink,
  masterWordGitLink,
  masterWordLink,
  mongoIcon,
  mysqlIcon,
  ncsImages,
  nodeIcon,
  pythonIcon,
  reactIcon,
  sassIcon,
  tigergraphIcon,
  typescriptIcon,
  underConstruction,
  uniImages,
  welcomeImages,
  zendodoImages,
} from './constants'

export const welcomeData = (
  <div className={styles.container}>
    <div className={styles.title}>Welcome to My Portfolio</div>
    <div className={styles.images}>
      <WovenImageList imgList={welcomeImages} cols={1} />
    </div>
    <div className={styles.body}>
      <div className={styles.section}>
        <strong>Hello! I'm Sourabh and I love building stuff</strong>
        <div style={{ paddingBottom: '1rem', fontWeight: 500 }}>
          Preferably Software but have worked on Cybersecurity as well :)
        </div>
        <div style={{ paddingBottom: '1rem' }}>
          {' '}
          To know more about me, my skills and experiences walk around with WASD
          keys and walk upto the buttons (similar to the image) at each section
          and press E to get more information . Press E again or click outside
          the message to close it.
        </div>
        <div>
          <strong>Thank you</strong> for checking this out
        </div>
      </div>
    </div>
  </div>
)

export const uniData = (
  <div className={styles.container}>
    <div className={styles.title}>University</div>
    <div className={styles.images}>
      <WovenImageList imgList={uniImages} cols={2} />
    </div>
    <div className={styles.body}>
      <div className={styles.section}>
        <h1>National University Of Singapore</h1>
        <div>
          <div>
            <strong>Graduation: </strong> December 2023
          </div>
          <div>
            <strong>Major:</strong> Bachelors in Computer Science
          </div>
          <div>
            <strong>Co-curricular Activities: </strong>
            <ul>
              <li>
                <strong>Technical Lead</strong> of NUS Fintech Society. The team
                developed a Property Recommendor for the Singapore Market
              </li>
              <li>
                <strong>Student Council Member</strong> for Pioneer House(A
                Dormitory in NUS). The responsibilities included creating a
                sense of belonging and to enrich university experience for all
                the residents through organinsing various events: Cultural
                Phest, McBreakPhast.
              </li>
              <li>
                <strong>Band and Guitar Interest Group Leader</strong> for
                Pioneer House. The responsibilities included organinsing
                sessions for practice and learning as well as preparing for
                performances
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h1>Indian Institue of Technology, Ropar</h1>
        <div>
          <div>
            <strong>Transferred to NUS:</strong>2020
          </div>
          <div>
            <strong>Major:</strong> Bachelors in Mathematics and Computing
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const tutorData = (
  <div className={styles.container}>
    <div className={styles.title}>Tutor/TA</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>CS2040/CS2040S: </strong>Algorithms and Data Structure under Dr.
        Chong Ket Fah. As a Teaching Assistant, I was responsible for holding
        Lab Sessions and summarise and clarify student doubts
      </div>
      <div className={styles.subsection}>
        <strong>International Linguistic Olympiad: </strong> Mentor and Problem
        Setter for the Indian National Team Selection. It involved creating and
        vetting problems for the examination as well as mentoring the team for
        the International Linguistic Olympiad
      </div>
    </div>
  </div>
)

export const examData = (
  <div className={styles.container}>
    <div className={styles.title}>Awards</div>
    <div className={styles.images}>
      <WovenImageList imgList={examImages} cols={1} />
    </div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>International Linguistics Olympiad: </strong> Reprsented India
        at the IOL 2019 Yongin. The selection process required two rounds and a
        camp for the team selection at the National level. The top 8 students
        were chosen from high school students all over the nation. I was
        fortunate to get a silver medal, a best solution and a bronze medal for
        the team competition during the Team Selection Round.
      </div>
      <div className={styles.subsection}>
        <strong>KVPY: </strong> The Kishore Vaigyanik Protsahan Yojana (KVPY) is
        an on-going National Program of Fellowship in Basic Sciences, initiated
        and funded by the Department of Science and Technology, Government of
        India. I received this scholarship at 11th Grade after two rounds of
        written test and interview.
      </div>
      <div className={styles.subsection}>
        <strong>NUS Hack&Roll: </strong> Hack&Roll is NUS Hackers' annual
        24-hour hackathon, and the largest student-run hackathon in Singapore.
        My team won the Top8 prize in Singapore
      </div>
    </div>
  </div>
)

export const bukuwarungData = (
  <div className={styles.container}>
    <div className={styles.title}>Internship at BukuWarung</div>
    <div className={styles.images}>
      <WovenImageList imgList={bukuwarungImages} cols={1} />
    </div>
    <div className={styles.body}>
      <div className={styles.subsection} style={{ flexDirection: 'column' }}>
        <div>
          <strong>Internship Period: </strong> May 2021 to August 2021
        </div>
        <div>
          <strong>Role: </strong> Frontend Web Developer Intern
        </div>
        <div>
          <strong>Tech stack: </strong> NextJS, Spring, HTML, CSS
        </div>
      </div>
      <div className={styles.subsection}>
        <h1>Responsibilites:</h1>
        <ul>
          <li>
            Developed and built features for the e-Commerce platform (tokoko.id)
          </li>
          <li>
            Achieved fluency in NextJS and Context API in order to successfully
            migrate from Spring and used RESTful APIs to retrieve data from the
            backend implemented in Spring
          </li>
          <li>
            Collaborated with product managers, testers and developers in a
            SCRUM environment
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export const zendodoData = (
  <div className={styles.container}>
    <div className={styles.title}>Internship at Zendodo</div>
    <div className={styles.images}>
      <WovenImageList imgList={zendodoImages} cols={1} />
    </div>
    <div className={styles.body}>
      <div className={styles.subsection} style={{ flexDirection: 'column' }}>
        <div>
          <strong>Internship Period: </strong> December 2021 to May 2022
        </div>
        <div>
          <strong>Role: </strong> Web Developer Intern
        </div>
        <div>
          <strong>Tech stack: </strong> NextJS, WAX Blockchain API, Typescript
        </div>
      </div>
      <div className={styles.subsection}>
        <h1>Responsibilites:</h1>
        <ul>
          <li>
            Developed the gamification aspect for the NFTs owned by the users on
            the platform, allowing users to earn an active income
          </li>
          <li>
            Worked with NextJS, React, Typescript, Sass and Zustand and used WAX
            Blockchain RPC API for fetching data and making transactions on the
            WAX blockchain
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export const ncsData = (
  <div className={styles.container}>
    <div className={styles.title}>Internship at NCS</div>
    <div className={styles.images}>
      <WovenImageList imgList={ncsImages} cols={1} />
    </div>
    <div className={styles.body}>
      <div className={styles.subsection} style={{ flexDirection: 'column' }}>
        <div>
          <strong>Internship Period: </strong> May 2022 to August 2022
        </div>
        <div>
          <strong>Role: </strong> Software Development Intern
        </div>
        <div>
          <strong>Tech stack: </strong> NextJs, TigerGraph, AWS, Spark, VMs,
        </div>
      </div>
      <div className={styles.subsection}>
        <h1>Responsibilites:</h1>
        <ul>
          <li>
            Developed a custom Dashboard using NextJs and TigerGraph on the
            backend for the scam detection project, which will be demoed at the
            NCS Innovation HUB.
          </li>
          <li>
            Currently working on training on Red Team/ Cybersecurity and setting
            up the virtual security lab for malware attacks and analysis
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export const contactData = (
  <div className={styles.container}>
    <div className={styles.title}>Contact Me here</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <div>
          <div>
            <strong>GitHub</strong>
          </div>
          <FontAwesomeIcon
            icon={faGithubSquare as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(githubLink)}
          />
        </div>
        <div>
          <div>
            <strong>LinkedIn</strong>
          </div>
          <FontAwesomeIcon
            icon={faLinkedin as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(linkedInLink)}
          />
        </div>
        <div>
          <div>
            <strong>Instagram</strong>
          </div>
          <FontAwesomeIcon
            icon={faInstagramSquare as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(instaLink)}
          />
        </div>
      </div>
    </div>
  </div>
)

export const masterwordData = (
  <div className={styles.container}>
    <div className={styles.title}>Masterword at NUS HackNRoll2022</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>The Game</strong>
        <ul>
          <li>
            Master Word is a word game similar to the popular game Wordle, that
            allows you to test your puzzle skills while teasing you by giving
            you the information about how close you are to the answer. A word is
            picked at random by the computer from the English dictionary which
            the player is supposed to guess. The guess can only be a valid
            English word. The player gets a fixed number of tries for every
            word, and after each guess, the player is told how many alphabets in
            their guess overlap the ones in the given word, and moreover, how
            many of them are in the right position, thus acting as hints and
            enabling the player to solve the puzzle. Further you can change the
            difficulty based on word length you choose. The game was developed
            for the 24 hour NUS HacknRoll 2022 Hackathon, which was awarded the
            top 8 project
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <div>
          <div>
            <strong>GitHub Repo</strong>
          </div>
          <FontAwesomeIcon
            icon={faGithubSquare as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(masterWordGitLink)}
          />
        </div>
        <div>
          <div>
            <strong>DevPost Link</strong>
          </div>
          <FontAwesomeIcon
            icon={faD as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(devpostLink)}
          />
        </div>
        <div>
          <div>
            <strong>Game Link</strong>
          </div>
          <FontAwesomeIcon
            icon={faSquareArrowUpRight as IconProp}
            className={styles.brandIcon}
            onClick={() => openInNewTab(masterWordLink)}
          />
        </div>
      </div>
    </div>
  </div>
)

export const toolsData = (
  <div className={styles.container}>
    <div className={styles.title}>Tools</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>I am good at: </strong>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={javaIcon} alt={'java icon'} />
            <div>Java</div>
          </div>
          <div className={styles.icon}>
            <img src={typescriptIcon} alt={'typescript icon'} />
            <div>Typescript</div>
          </div>
          <div className={styles.icon}>
            <img src={reactIcon} alt={'react icon'} />
            <div>React</div>
          </div>
          <div className={styles.icon}>
            <img src={cppIcon} alt={'C++ icon'} />
            <div>C++</div>
          </div>
          <div className={styles.icon}>
            <img src={gitIcon} alt={'GitHub Icon'} />
            <div>Git</div>
          </div>
          <div className={styles.icon}>
            <img src={sassIcon} alt={'Sass Icon'} />
            <div>Sass</div>
          </div>
        </div>
      </div>
      <div className={styles.subsection}>
        <strong>I have tried:</strong>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img src={mysqlIcon} alt={'MySql Icon'} />
            <div>MySql</div>
          </div>
          <div className={styles.icon}>
            <img src={nodeIcon} alt={'NodeJs Icon'} />
            <div>NodeJs</div>
          </div>
          <div className={styles.icon}>
            <img src={tigergraphIcon} alt={'TigerGraph Icon'} />
            <div>TigerGraph</div>
          </div>
          <div className={styles.icon}>
            <img src={awsIcon} alt={'AWS Icon'} />
            <div>AWS</div>
          </div>
          <div className={styles.icon}>
            <img src={mongoIcon} alt={'MongoDB Icon'} />
            <div>MongoDB</div>
          </div>
          <div className={styles.icon}>
            <img src={pythonIcon} alt={'Python Icon'} />
            <div>Python</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const thinkathonData = (
  <div className={styles.container}>
    <div className={styles.title}>Winning NCS Thinkathon</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>Under Construction</strong>
        <img src={underConstruction} alt={'under construction gif'} />
      </div>
    </div>
  </div>
)

export const travelData = (
  <div className={styles.container}>
    <div className={styles.title}>Future Plans/ Projects</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>Under Construction</strong>
        <img src={underConstruction} alt={'under construction gif'} />
      </div>
    </div>
  </div>
)

export const hobbiesData = (
  <div className={styles.container}>
    <div className={styles.title}>My Hobbies</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>Under Construction</strong>
        <img src={underConstruction} alt={'under construction gif'} />
      </div>
    </div>
  </div>
)
