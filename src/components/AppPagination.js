import React from 'react'
import { Pagination } from '@mui/material';
import '../css/AppPagination.css';
export default function AppPagination({setPage, pageNumber}) {
    const handlePage=(pageNumber)=>{
        setPage(pageNumber);
        window.scroll(0,0);
    }
    return (
        <div>
            <div className="Pagination">
                <Pagination count={pageNumber} 
                onChange={(e)=>handlePage(e.target.textContent)} 
                variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}