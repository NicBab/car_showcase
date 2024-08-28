"use client"
import { SearchManufacturer, SearchButton } from "@/components/index"
import { useState } from "react"

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('')
  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
       <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    </form>
  )
}

export default SearchBar