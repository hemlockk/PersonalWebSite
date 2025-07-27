import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import AWSCloudPracticioner from "./images/AWSCloudPracticioner.png";
import Sakarya_logo from "./images/Sakarya_logo.jpg";
import free_code_camp_logo from "./images/free_code_camp_logo.jpeg"; 
import hackerrank_logo from "./images/hackerrank_logo.jpeg"; 
import British_Council_logo from "./images/British_Council_logo.jpg";



export default function Portfolio() {
  const [showJr, setShowJr] = React.useState(false);
  const [showPartTime, setShowPartTime] = React.useState(false);
  const [showIntern, setShowIntern] = React.useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Ali Yusuf Akbay</h1>
          <p className="text-xl text-gray-600">Software Developer</p>
          <div className="flex justify-center mt-4 gap-4">
            <a href="mailto:ali.yusuf01@hotmail.com" className="hover:text-blue-500">
              <Mail />
            </a>
            <a href="https://github.com/hemlockk" target="_blank" className="hover:text-gray-800">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/ali-yusuf-akbay-b95552209/" target="_blank" className="hover:text-blue-700">
              <Linkedin />
            </a>
          </div>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I graduated from Sakarya University with a degree in Computer Engineering and a GPA of 3.22/4. During my studies, I gained early work experience through online translation at Protranslate during the pandemic. In July 2022, I joined P.I. Works as a Software Support Engineer Intern. I continued in a part-time role throughout my senior year and transitioned to a full-time position upon graduation, becoming an integral part of the team. I'm passionate about solving technical challenges and continuously developing my skills in software and systems support.
          </p>
        </section>
        <br></br>
        <section className="mb-12">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div className="border rounded-xl shadow p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Jr. Software Engineer</h3>
              <button
                onClick={() => setShowJr((prev) => !prev)}
                className="text-blue-600 underline font-semibold focus:outline-none"
              >
                {showJr ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-gray-700 mb-1">P.I. Works, Inc. &mdash; Istanbul, Remote</p>
            <p className="text-gray-600 mb-1">08/2023 &ndash; Present</p>
            {showJr && (
              <>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Communicated with a global client base regarding products and solutions over Jira.</li>
                  <li>Managed SaaS applications supporting dynamic web services on Windows & Linux (CentOS, RedHat).</li>
                  <li>Resolved complex software issues using advanced debugging and troubleshooting methods.</li>
                  <li>Automated operations using PL/SQL, bash, and PowerShell to improve response times and reduce manual work.</li>
                  <li>Designed and optimized complex SQL queries for data analysis and monitoring.</li>
                  <li>Created Python tools to facilitate support operations and ease on-call duties.</li>
                  <li>Deployed software upgrades, installed microservices in Docker containers, and configured REST API endpoints.</li>
                  <li>Optimized and managed ETL operations for stable and reliable data flow.</li>
                  <li>Developed networking solutions, including load balancing with HAProxy and firewall rules for secure data flow.</li>
                  <li>Utilized monitoring and alerting tools like Zabbix to proactively address system issues.</li>
                  <li>Diagnosed performance bottlenecks and system issues by analyzing logs and metrics.</li>
                  <li>Led a team through a successful migration project from Oracle to ClickHouse database.</li>
                  <li>Collaborated with other teams on software development, testing, and release.</li>
                  <li>Developed and implemented timely solutions & workarounds in line with strict SLAs.</li>
                  <li>Utilized Ansible for change and configuration management to streamline setup processes.</li>
                  <li>Shared expertise and documented best practices on Confluence, actively contributing to team knowledge exchange.</li>
                </ul>
                <a href="https://piworks.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 inline-block">Company Website</a>
              </>
            )}
          </div>
          <div className="border rounded-xl shadow p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Part-Time Software Engineer</h3>
              <button
                onClick={() => setShowPartTime((prev) => !prev)}
                className="text-blue-600 underline font-semibold focus:outline-none"
              >
                {showPartTime ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-gray-700 mb-1">P.I. Works, Inc.  — Istanbul, Remote</p>
            <p className="text-gray-600 mb-1">10/2022 &ndash; 08/2023</p>
            {showPartTime && (
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Worked collaboratively to meet KPI targets.</li>
                <li>Successfully passed a final 4-stage interview after 5 months.</li>
                <li>Achieved: One of 2 out of 6 candidates who qualified for a full-time position.</li>
              </ul>
            )}
          </div>
          <div className="border rounded-xl shadow p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Software Engineering Intern</h3>
              <button
                onClick={() => setShowIntern((prev) => !prev)}
                className="text-blue-600 underline font-semibold focus:outline-none"
              >
                {showIntern ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-gray-700 mb-1">P.I. Works, Inc. — Istanbul, On-Site</p>
            <p className="text-gray-600 mb-1">07/2022 &ndash; 10/2022</p>
            {showIntern && (
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Achieved: One of 6 out of 13 interns eligible to continue part-time.</li>
              </ul>
            )}
          </div>
          <div className="border rounded-xl shadow p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">English Translator</h3>
              <button
                onClick={() => setShowIntern((prev) => !prev)}
                className="text-blue-600 underline font-semibold focus:outline-none"
              >
                {showIntern ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-gray-700 mb-1">Protranslate.net — Istanbul, Remote</p>
            <p className="text-gray-600 mb-1">02/2021 &ndash; 07/2022</p>
            {showIntern && (
              <>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>I translated official documents, homework, and websites from Turkish to English.</li>
                  <li>During this time I completed 50 translation Jobs and 14 proofreading Jobs.</li>
                  <li>My quality score is currently 8.17/10</li>
                </ul>
                <a href="https://www.protranslate.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 inline-block">Company Website</a>
              </>
            )}
          </div>
        </div>
      </section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 border rounded-xl shadow p-6 bg-gray-50">
            <a href="https://cs.sakarya.edu.tr/" target="_blank" rel="noopener noreferrer">
              <img
                src={Sakarya_logo}
                alt="Sakarya University Logo"
                className="w-24 h-24 object-contain rounded mb-4 md:mb-0"
              />
            </a>
            <div>
              <h3 className="text-xl font-bold mb-2">Sakarya University</h3>
              <p className="text-gray-700 mb-1">B.Sc. in Computer Science/Engineering</p>
              <p className="text-gray-700 mb-1">GPA: <span className="font-semibold">3.22 / 4.00</span></p>
              <p className="text-gray-600">Graduated - Sep, 2019 - Aug, 2023</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-xl shadow p-4">
              <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
              <p className="text-gray-700 mb-2">A React-based portfolio showcasing my projects and resume.</p>
              <a
                href="https://github.com/hemlockk/PersonalWebSite"
                target="_blank"
                className="inline-block border rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                View Code
              </a>
            </div>

            <div className="border rounded-xl shadow p-4">
              <h3 className="text-xl font-bold mb-2">Cash Registery App</h3>
              <p className="text-gray-700 mb-2">This is one of my last year projects in Sakarya University written in C#</p>
              <a
                href="https://github.com/hemlockk/BarkodluSatis"
                target="_blank"
                className="inline-block border rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                View Code
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="w-full">
              <a
                href="https://www.credly.com/badges/8c585abd-2007-42ca-9f64-8f82eccd7fc8/linked_in_profile"
                target="_blank"
                className="inline-flex flex-col items-center justify-between text-center border rounded px-4 py-2 text-sm hover:bg-gray-100 h-64 w-full max-w-[240px]"
              >
                <img src={AWSCloudPracticioner} alt="AWS Cloud Practitioner" className="w-16 h-16 object-contain" />
                <span className="font-medium mt-2">AWS Certified Cloud Practitioner</span>
                <span> Issued by: Amazon Web Services</span>
                <span> Date issued: September, 2024</span>
                <span> Expires: September, 2027</span>
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://www.freecodecamp.org/certification/fcc49575b09-50b7-46a0-ac74-12b27dbf9293/javascript-algorithms-and-data-structures"
                target="_blank"
                className="inline-flex flex-col items-center justify-between text-center border rounded px-4 py-2 text-sm hover:bg-gray-100 h-64 w-full max-w-[240px]"
              >
                <img src={free_code_camp_logo} alt="JavaScript Algorithms and Data Structures" className="w-16 h-16 object-contain" />
                <span className="font-medium mt-2 text-center self-center">JavaScript Algorithms and Data Structures</span>
                <span> Issued by: freeCodeCamp</span>
                <span> Date issued: October, 2022</span>
                <span> No Expiration</span>
              </a>
            </div>
            <div className="w-full">
              <a
                href="https://www.hackerrank.com/certificates/ef819e7c20ec"
                target="_blank"
                className="inline-flex flex-col items-center justify-between text-center border rounded px-4 py-2 text-sm hover:bg-gray-100 h-64 w-full max-w-[240px]"
              >
                <img src={hackerrank_logo} alt="SQL (Advanced) Certificate" className="w-16 h-16 object-contain" />
                <span className="font-medium mt-2 text-center self-center">SQL (Advanced) Certificate</span>
                <span> Issued by: hackerrank.com</span>
                <span> Date issued: Mar, 2024</span>
                <span> No Expiration</span>
              </a>
            </div>
          </div> 
          <br></br>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="w-full">
              <a
                href="/ielts.pdf"
                download
                className="inline-flex flex-col items-center justify-between text-center border rounded px-4 py-2 text-sm hover:bg-gray-100 h-64 w-full max-w-[240px]"
              >
                 <img src={British_Council_logo} alt="IELTS" className="w-16 h-16 object-contain" />
              
              <span className="font-medium mt-2">IELTS</span>
              <span> Issued by: British Council</span>
              <span> Date issued: May, 2024</span>
              <span> Expires: May, 2026</span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    </main>
  );
}
