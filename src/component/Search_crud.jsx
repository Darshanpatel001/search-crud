import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchCrud = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [buttondata, setbuttondata] = useState([])

  const getData = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setData(res.data)
    setbuttondata(res.data)
  }

  // search-data=====
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  function serachdata (){
    const filtersearch = data.filter(b => {
      return b.title.toLowerCase().includes(search.toLowerCase())
    })
    setbuttondata(filtersearch)
    
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <input 
        type="text"
        style={{ textAlign: 'center', marginRight: "15px" }}
        name="search"
        value={search}
        onChange={handleSearch}
        placeholder='Search'
      />
      <button onClick={serachdata}>SEARCH</button>
      <br /><br />
      <table cellPadding="10px" className="col-12 text-center table-bordered border-secondary">
        <thead>
          <tr>
            <th>No</th>
            <th>userId</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {
           buttondata.map((value, index) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.userId}</td>
                <td>{value.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default SearchCrud
