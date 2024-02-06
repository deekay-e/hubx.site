const MegaMenuLinks = ({ item }) => {
  const content = (
    <li key={item.name} className='flex'>
      <a href={item.href} className='font-medium hover:text-blue-600'>
        {item.name}
      </a>
    </li>
  )
  return content
}

export default MegaMenuLinks