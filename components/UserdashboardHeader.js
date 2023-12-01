import Link from 'next/link';

export default function UserdashboardHeader() {
  const navigationItems = [
    { name: 'Home', url: '/home', id: 1 },
    { name: 'Settings', url: '/setting', id: 1 },
    { name: 'History', url: '/history', id: 1 },
    { name: 'Help', url: '/help', id: 1 },
    { name: 'Updates', url: '/updates', id: 1 },
    { name: 'Logout', url: '/home', id: 1 },
  ];

  const content = (
    <header className='flex flex-col justify-center  items-center   w-screen  min-h-[5rem] z-0'>
      <section className='flex justify-between px-3 items-center  gap-3 flex-row w-full min-h-[5rem] border-2 shadow-md shadow-gray-500 border-b-black'>
        <div className='center-with-flex border-2 border-black shadow-gray-500 shadow-md  h-[4rem] w-[30%] '>
          <h1 className=''>user plan</h1>
        </div>
        <div className='h-[70%] w-[70%]'>
          <h1>Full Name: james brook</h1>
          <h1>Email: james@gmail.com</h1>
        </div>
      </section>
      <div className='w-screen z-0'>
        <nav className='h-[calc(100vh - 5rem)] w-[25%] bg-yellow-500 mr-auto    '>
          <ul>
            {navigationItems.map((data) => (
              <li key={data.id}>
                <Link href={data.url}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );

  return content;
}
