export default function Card({
  imgUrl,
  title,
  description,
}: {
  imgUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className='h-64 w-72 rounded-md shadow-md float-left m-2'>
      <img
        src={imgUrl}
        alt={title}
        className='h-2/5 w-full rounded-tl-md rounded-tr-md'
      />
      <div className='p-4'>
        <h2 className='text-2xl text-blue-600 mb-2 tracking-tight leading-snug'>
          {title}
        </h2>
        <p className='font-light text-gray-700 text-sm leading-tight'>
          {description}
        </p>
      </div>
    </div>
  );
}
