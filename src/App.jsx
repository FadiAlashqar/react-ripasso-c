import { useState } from "react"
import useFetch from "./hooks/useFetch"
import UserCard from "./components/UserCard"

function App() {

  const [query, setQuery] = useState("")

  const { data, error, loading, setData } = useFetch('http://localhost:3000/myServer/users')

  const filteredData = data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [nationality, setNationality] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      name,
      age,
      nationality
    }

    const response = await fetch('http://localhost:3000/myServer/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)


    })

    const createdUser = await response.json()

    setData(prev => [...prev, createdUser])


  }

  console.log(data)


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1>My Users!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <input type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users..."
            />
          </div>
        </div>
        <div className="row p-2">
          {loading && <span>Loading...</span>}
          {error && <span className="text-danger">{error}</span>}
          {!loading && !error && filteredData.length === 0 && <span>No user found!</span>}
          {filteredData.map((d) => {
            return <div className="col-4 p-2" key={d.id}>
              <UserCard
                name={d.name}
                age={d.age}
              />
            </div>
          })}
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <input type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input type="number"
                value={age}
                name="age"
                onChange={(e) => setAge(e.target.value)}
              />
              <input type="text"
                value={nationality}
                name="nationality"
                onChange={(e) => setNationality(e.target.value)}
              />
              <button type="submit">Create user</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
