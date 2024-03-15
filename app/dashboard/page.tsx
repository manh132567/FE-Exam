"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import React, { useEffect, useState } from "react";
import { fetchData, postData } from "@/services/axiosServices";
import { useRouter } from "next/navigation";

function Page() {
  const [projects, setProjects] = useState([]);
  console.log("🚀 ~ Page ~ projects:", projects);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetchData(`/projects`)
      .then((res) => {
        setCount(res.count);
        setProjects(res.results || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ThemeToggle />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project name
              </th>
              <th scope="col" className="px-6 py-3">
                Last accessed
              </th>
              <th scope="col" className="px-6 py-3">
                Domain
              </th>
              <th scope="col" className="px-6 py-3">
                License use
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: any) => (
              <tr
                key={project?.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {project.project_name}
                </th>
                <td className="px-6 py-4">{project.last_accessed}</td>
                <td className="px-6 py-4">{project.project_domain}</td>
                <td className="px-6 py-4">
                  <div>
                    {project.license_use.map((li: any) => (
                      <div key={li.license_type}><span className="font-[600]">{li.license_type}:</span> {li.libraries.join(",")}</div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
