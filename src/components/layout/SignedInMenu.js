import React from 'react'

const SignedInMenu = ({ logout }) => {
  return (
    <li><a onClick={logout}>Log out</a></li>
  )
}

export default SignedInMenu