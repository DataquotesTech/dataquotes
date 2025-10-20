import CourseTemplate from "@/components/common/CourseTemplate";
import { dataScienceCourse } from "@/lib/courseData";

export default function DataScience() {
  return <CourseTemplate {...dataScienceCourse} />;
}
