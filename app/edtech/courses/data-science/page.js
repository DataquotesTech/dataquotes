import CourseTemplate from "@/components/common/CourseTemplate";
import { dataScienceCourse } from "@/lib/courseData";

export default function DataScience() {
  // return <div className="text-white h-screen w-full flex items-center justify-center bg-black">Data Science</div>;
  return <CourseTemplate {...dataScienceCourse} />;
}
