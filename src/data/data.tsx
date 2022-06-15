import WovenImageList from '../component/common/WovenImageList'
import styles from '../Info.module.css'

const uniImages = ['images/nus.png', 'images/iitrpr.png']

const examImages = ['images/IOL.png']

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
    <div className={styles.body}>
      <div className={styles.subsection}>
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
    <div className={styles.body}>
      <div className={styles.subsection}>
        <div>
          <strong>Internship Period: </strong> December 2021 to May 2022
        </div>
        <div>
          <strong>Role: </strong> Web Developer Intern
        </div>
        <div>
          <strong>Tech stack: </strong> NextJS, WAX Blockchain API
        </div>
      </div>
    </div>
  </div>
)

export const ncsData = (
  <div className={styles.container}>
    <div className={styles.title}>Internship at NCS</div>
    <div className={styles.body}>
      <div className={styles.subsection}>
        <strong>Internship Period: </strong> May 2022 to August 2022
      </div>
    </div>
  </div>
)

export const contactData = (
  <div className={styles.container}>
    <div className={styles.title}>Contact Me here</div>
  </div>
)

export const masterwordData = (
  <div className={styles.container}>
    <div className={styles.title}>Masterword at NUS HackNRoll2022</div>
  </div>
)

export const toolsData = (
  <div className={styles.container}>
    <div className={styles.title}>Tools I am Good at</div>
  </div>
)

export const thinkathonData = (
  <div className={styles.container}>
    <div className={styles.title}>Winning NCS Thinkathon</div>
  </div>
)

export const travelData = (
  <div className={styles.container}>
    <div className={styles.title}>Future Plans/ Projects</div>
  </div>
)

export const hobbiesData = (
  <div className={styles.container}>
    <div className={styles.title}>My Hobbies</div>
  </div>
)
