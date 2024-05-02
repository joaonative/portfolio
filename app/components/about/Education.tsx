import React from "react";
import Section from "../layout/Section";
import { Check, GraduationCap } from "lucide-react";

const courses: CourseProps[] = [
  {
    courseName: "Técnico em Informática para Internet",
    institution: "Fundação Indaiatubana de Educação e Cultura",
    initialDate: "Jan 2023",
    endDate: "Jun 2024",
    isCompleted: false,
  },
  {
    courseName: "Técnico em Informática para Internet",
    institution: "Fundação Indaiatubana de Educação e Cultura",
    initialDate: "Jan 2023",
    endDate: "Jun 2024",
    isCompleted: true,
  },
];

const Education = () => {
  return (
    <Section title="Education" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <Course
            courseName={course.courseName}
            endDate={course.endDate}
            initialDate={course.initialDate}
            institution={course.institution}
            isCompleted={course.isCompleted}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

interface CourseProps {
  initialDate: string;
  endDate: string;
  courseName: string;
  institution: string;
  isCompleted: boolean;
}

const Course = ({
  initialDate,
  endDate,
  courseName,
  institution,
  isCompleted,
}: CourseProps) => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-5 col-span-1">
      <span className="hidden lg:block text-primary p-2 bg-primary/25 rounded-full">
        <GraduationCap size={48} aria-label="graduation cap emoji" />
      </span>

      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-3">
          <h3 className="font-medium text-xl text-white/75">
            {initialDate} - {endDate}
          </h3>
          {isCompleted ? (
            <span className="relative inline-flex">
              <div className="p-1 bg-green-600 rounded-full">
                <Check size={16} />
              </div>
            </span>
          ) : (
            <span className="relative inline-flex">
              <div className="w-5 h-5 bg-blue-400 rounded-full"></div>{" "}
              <div className="w-5 h-5 bg-blue-400 rounded-full absolute top-0 left-0 animate-ping"></div>
            </span>
          )}
        </span>
        <h1 className="font-bold text-xl lg:text-3xl">{courseName}</h1>
        <h2 className="text-xl text-white/75">{institution}</h2>
      </div>
    </div>
  );
};

export default Education;
