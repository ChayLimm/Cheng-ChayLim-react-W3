import CourseCard from './CourseCard'

export const courses = [
  {
    title: 'React for Beginners',
    description: 'Learn the basics of React.',
    price: 49.99,
    imageUrl: 'https://talent500.com/blog/wp-content/uploads/sites/42/2023/08/0_y6IcBe5J1AdALzXw.png'
  },
  {
    title: 'Advanced React',
    description: 'Dive deeper into React hooks and performance.',
    price: 69.99,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*4ZCkxzgv2Fne5DE5ZTCDJg.png'
  },
  {
    title: 'JavaScript Mastery',
    description: 'Master modern JavaScript from zero to hero.',
    price: 59.99,
    imageUrl: 'https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png'
  },
  {
    title: 'TypeScript Fundamentals',
    description: 'Strong typing made easy.',
    price: 39.99,
    imageUrl: 'https://blog.logrocket.com/wp-content/uploads/2021/03/typescript-logo.png'
  },
  {
    title: 'Node.js Essentials',
    description: 'Learn backend development with Node.js.',
    price: 54.99,
    imageUrl: 'https://nodejs.org/static/images/logo.svg'
  },
  {
    title: 'UI/UX Design Basics',
    description: 'Understand design principles and frameworks.',
    price: 44.99,
    imageUrl: 'https://cdn.dribbble.com/users/25514/screenshots/18900706/media/3d0ff90cc7a8670ec7eac3f1ea32fc33.png'
  },
  {
    title: 'Flutter for Beginners',
    description: 'Build mobile apps with Flutter.',
    price: 59.99,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*7c4YDjW-ifmK5IZI8Vj6qg.png'
  },
  {
    title: 'Python for Everyone',
    description: 'A complete beginner-friendly Python course.',
    price: 29.99,
    imageUrl: 'https://www.python.org/static/community_logos/python-logo.png'
  },
  {
    title: 'Next.js Bootcamp',
    description: 'Learn full-stack with Next.js and API routes.',
    price: 79.99,
    imageUrl: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_gray.png'
  },
  {
    title: 'Docker & DevOps Basics',
    description: 'Learn containers, CI/CD, and deployment.',
    price: 89.99,
    imageUrl: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'
  }
];


export default function Course() {
  return (
    <div className='p-20 '>
        <h1>Course Component</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-screen max-w-5xl '>
           {
            courses.map((course)=>(<CourseCard courseCard={course}/>))
           }
        </div>
    </div>
  )
}
