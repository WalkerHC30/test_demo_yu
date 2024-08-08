
const Sidebar = () => {
  const links = ['白頭翁的特性', '白頭翁的故事', '白頭翁的美照', '白頭翁的危機']
  return (
    <section className="hidden md:flex md:flex-col md:items-center min-h-screen w-[345px] bg-white " >
      <h1 className="mt-20 text-[30px] text-black font-bold">白頭翁不吃小米</h1>
      <ul className="mt-28 flex flex-col">
        {links.map((title) => (
          <li key={crypto.randomUUID()}>
            <a className="text-lg font-normal" href="#">
              {title}
            </a>
          </li>
        ))}

      </ul>
    </section>
  )
}

export default Sidebar