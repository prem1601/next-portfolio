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
              During college - completed Jr. Software Developer (400 Hrs.)
              Course by Government of India & worked as volunteer in various
              camps of NSS .
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend Engineer</h5>
            <p className=" font-semibold">
              Quantiphi Technologies (Aug 2024 - May 2026)
            </p>
            <p className="my-3">
              Engineered scalable multi-tenant frontend modules supporting
              complex attendance, payroll metrics, and operational dashboards,
              improving UI loading performance by 70%. Built enterprise-grade
              workforce management workflows using ReactJS, TypeScript, and
              Redux Toolkit, increasing user experience metrics by 60%.
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
