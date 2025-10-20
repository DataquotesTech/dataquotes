# CourseTemplate Usage Guide

## Overview

The `CourseTemplate` component is a reusable template for creating course pages. It accepts props to customize the content and layout for different courses.

## Basic Usage

```javascript
import CourseTemplate from "@/components/common/CourseTemplate";
import { courseData } from "@/lib/courseData";

export default function MyCourse() {
  return <CourseTemplate {...courseData} />;
}
```

## Props Structure

The CourseTemplate accepts the following props:

### Required Props

- `title` (string): Course title
- `description` (string): Course description
- `duration` (string): Course duration (e.g., "6 months")
- `level` (string): Course level (e.g., "Beginner", "Intermediate")
- `image` (string): Path to course image

### Optional Props

- `skills` (array): Array of skill tags
- `coreSkills` (array): Array of core skills to learn
- `advancedSkills` (array): Array of advanced skills
- `curriculum` (array): Array of curriculum modules
- `features` (array): Array of course features
- `pricing` (object): Pricing information
- `testimonials` (array): Array of student testimonials
- `prerequisites` (array): Course prerequisites
- `outcomes` (array): Learning outcomes
- `schedule` (object): Course schedule
- `support` (object): Support information

## Data Structure Examples

### Curriculum Module

```javascript
{
  title: "Python Fundamentals",
  description: "Learn Python programming from basics to advanced concepts",
  duration: "4 weeks"
}
```

### Feature

```javascript
{
  icon: "📊",
  title: "Hands-on Projects",
  description: "Work on real-world datasets and build a portfolio"
}
```

### Pricing

```javascript
{
  amount: "2,999",
  description: "One-time payment with 30-day money-back guarantee"
}
```

### Testimonial

```javascript
{
  quote: "This course transformed my career...",
  name: "Sarah Johnson",
  role: "Data Scientist at TechCorp"
}
```

## Creating New Course Data

1. Create a new object in `lib/courseData.js`
2. Follow the structure of existing course data
3. Import and use in your course page

Example:

```javascript
// In lib/courseData.js
export const myNewCourse = {
  title: "My New Course",
  description: "Learn amazing things...",
  duration: "4 months",
  level: "Beginner",
  image: "/my-course-image.jpg",
  // ... other props
};

// In your course page
import CourseTemplate from "@/components/common/CourseTemplate";
import { myNewCourse } from "@/lib/courseData";

export default function MyNewCourse() {
  return <CourseTemplate {...myNewCourse} />;
}
```

## Customization

The template is designed to be flexible. If you need additional sections or different layouts, you can:

1. Modify the `CourseTemplate` component
2. Create a new template component
3. Use conditional rendering based on props

## Features Included

- Responsive design
- Framer Motion animations
- Dark theme consistent with project design
- Interactive elements
- SEO-friendly structure
- Accessibility features
- Mobile-first approach

## Sections Included

1. Hero Section with course overview
2. Skills Section (Core & Advanced)
3. Curriculum Section
4. Features Section
5. Pricing Section
6. Testimonials Section
7. FAQs Section (reuses existing FAQs component)
8. Call-to-Action Section

All sections are optional and will only render if the corresponding props are provided.
