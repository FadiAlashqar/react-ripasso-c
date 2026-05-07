import { useState } from "react"
import useFetch from "./hooks/useFetch"
import UserCard from "./components/UserCard"

function App() {

  const [query, setQuery] = useState("")

  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users')

  const filteredData = data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))

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
                email={d.email}
              />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
