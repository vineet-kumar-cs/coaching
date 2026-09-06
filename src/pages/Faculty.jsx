import { faculty } from '../data/siteData'
import { FacultyCard } from '../components/Common'
import { PageIntro, SectionHeading } from '../components/Layout'
export default function Faculty() { return <><PageIntro eyebrow="The people behind the progress" title="Meet the minds in your corner." text="Subject experts, patient mentors and lifelong learners who bring out your best work." /><section className="section"><div className="container"><SectionHeading eyebrow="Our faculty" title="Expertise with a human touch." text="Apex faculty are selected for the depth of their subject knowledge and the care they bring to every classroom." /><div className="faculty-grid faculty-page-grid">{faculty.map(person => <FacultyCard person={person} key={person.name} />)}</div></div></section></> }
