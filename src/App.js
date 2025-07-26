import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import AWSCloudPracticioner from "./images/AWSCloudPracticioner.png";
import free_code_camp_logo from "./images/free_code_camp_logo.jpeg"; 
import hackerrank_logo from "./images/hackerrank_logo.jpeg"; 
import British_Council_logo from "./images/British_Council_logo.jpg";



export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <a href="/contact" className="text-blue-600 hover:underline">Contact Me</a>
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
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-xl shadow p-4">
              <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
              <p className="text-gray-700 mb-2">A React-based portfolio showcasing my projects and resume.</p>
              <a
                href="https://github.com/aliyusufakbay/portfolio"
                target="_blank"
                className="inline-block border rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                View Code
              </a>
            </div>

            <div className="border rounded-xl shadow p-4">
              <h3 className="text-xl font-bold mb-2">Task Manager App</h3>
              <p className="text-gray-700 mb-2">A full-stack task manager app using MERN stack.</p>
              <a
                href="https://github.com/aliyusufakbay/task-manager"
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

        
      </div>
    </main>
  );
}
