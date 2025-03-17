import React from 'react'
import work from "../public/work.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div>
      Home
      <Image
        src={work}
        width={1000}
        height={1000}
        alt="Picture of the author"
      />
    </div>
  )
}

export default page
