import CourseTemplate from "@/components/common/CourseTemplate";
import { pythonFullStackCourse } from "@/lib/courseData";

export default function PythonFullStackDevelopment() {
  // return <div className="text-white h-screen w-full flex items-center justify-center bg-black">Python Full Stack Development</div>;
  return <CourseTemplate {...pythonFullStackCourse} />;
}
