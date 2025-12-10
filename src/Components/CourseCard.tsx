
interface CourseCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

export default function CourseCard({courseCard} : {courseCard :CourseCardProps}) {
  return (
    <div className='flex flex-col p-4 rounded-lg bg-white'>
      <img src={courseCard.imageUrl} alt="" className="w-32 h-24"/>
      <h2 className="text-black font-bold">{courseCard.title}</h2>
      <p className="text-black">{courseCard.description}</p>
    </div>
  )
}   
