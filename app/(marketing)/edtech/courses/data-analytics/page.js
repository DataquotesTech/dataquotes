import CourseTemplate from "@/components/common/CourseTemplate";
import { dataAnalyticsCourse } from "@/lib/courseData";

export default function DataAnalytics() {
  // return <div className="text-white h-screen w-full flex items-center justify-center bg-black">Data Analytics</div>;

  return <CourseTemplate {...dataAnalyticsCourse} />;
}
