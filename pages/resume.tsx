import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //education and experience  */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">E&TC (B.Tech)</h5>
            <p className=" font-semibold">ATS, SBGI, Miraj(2017 - 2021)</p>
            <p className="my-3">
              During college - completed Jr. Software Developer (400 Hrs.) Course
              by Government of India & worked as volunteer in various camps of NSS .
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Sr. Web Developer</h5>
            <p className=" font-semibold">
              Datart Infotech (April 2023 - present)
            </p>
            <p className="my-3">
              Headed the onshore development team, improving code quality by 90%
              while ensuring accurate requirement implementation.
            </p>
          </div>
        </div>
      </div>

      {/* //language and tools */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
