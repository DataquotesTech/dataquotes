import CourseTemplate from "@/components/common/CourseTemplate";
import { pythonFullStackCourse } from "@/lib/courseData";

export default function PythonFullStackDevelopment() {
  return <CourseTemplate {...pythonFullStackCourse} />;
}
