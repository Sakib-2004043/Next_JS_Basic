import React from 'react'
import Link from 'next/link'

import getData from './data'

const StaticSiteGeneration = async() => {
  const users = await getData()
  return (
    <div>
      <h2>Static Site Generation In Next JS 14</h2>
      <h3>Usernames List</h3>
      {
        users.map((user,i) => (
          <h3 key={i}><Link href={`/ssg/${user.id}`}>{user.username}</Link></h3>
        ))
      }
    </div>
  )
}

export default StaticSiteGeneration
