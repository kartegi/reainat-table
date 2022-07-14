import React from 'react'
import SearchForm from '../searchForm/SearchForm'

import './header.sass'

const Header: React.FC = () => {
  return (
    <header className='header'>
        <SearchForm />
    </header>
  )
}

export default Header