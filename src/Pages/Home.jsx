import Banner from "../components/Banner"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  useEffect(()=> {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data)
      setIsLoading(false);
    })
  },[])
  // console.log(jobs)

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
      // 
  }
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  // console.log(filteredItems)
  const handlChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //main function
  const filteredData = (jobs, selected, query)  => {
    let filteredJobs = jobs;
    if(query){
      filteredJobs = filteredItems;
    }
    //category filtering
    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice) === parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }
    return filteredJobs.map((data, i) => <Card key={i} data = {data}/>)
  }
  const result = filteredData(jobs, selectedCategory, query)
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
      <div className="bg-gray-100 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side bar */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange ={handlChange} handleClick={handleClick}/>
        </div>
        
        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading ? (<p>Loading...</p>) : result.length > 0 ? (<Jobs result ={result}/>) : <>
            <h3>{result.length} Jobs</h3>
            <p>No data found!</p>
            </>
          }
</div>
        
        {/* right side bar */}
        <div className="bg-white p-4 rounded">
        {/* <Sidebar handleChange ={handlChange} handleClick={handleClick}/> */}
        right
        </div>

      </div>
    </div>
  )
}

export default Home