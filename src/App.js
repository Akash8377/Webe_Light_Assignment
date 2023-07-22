
import './App.css';
import Repos from './components/Repository';
import { useEffect, useState } from 'react';
import AppPagination from './components/AppPagination';
function App() {
  const[repoList,setRepoList]=useState([]);
  const[page,setPage]=useState(1);
  const[pageNumber,setPageNumber]=useState(10);

 
  useEffect(()=>{
    fetch(`https://api.github.com/search/repositories?q=created:%3E2022-09-22&sort=stars&order=desc&page=${page}`).then((res)=>res.json()).then((data)=>(setRepoList(data.items), setPageNumber(data.total_count)))
  },[page])
  return (
    <div className="App">
      <p id="App-starred">Most Starred Repos</p>
      {repoList.map((item,index)=><p key={index}><Repos getItem={item} /></p>)}
      
      <AppPagination setPage={setPage} pageNumber={pageNumber}/>
    </div>
  );
}

export default App;
