import "./index.css"
const Filters=({filters,setFilters})=> {
   
    return (
        <div className='filters-flexContainer'>
                  <h1 className='filters-heading'>Filters</h1>
        <div className='filter-content-flex'>
            <div className="filter-input-container">
                <label className="input-label" htmlFor="priority">Priority:</label>
                <select id="priority" className='filter-select' value={filters.priority||"all"} onChange={(e) => setFilters({...filters, priority: e.target.value})}>
                <option value="all">All</option>
                <option value="max">max priority</option>
                <option value="min">min priority</option>
                </select>
            </div>
            <div className="filter-input-container">
                <label className="input-label" htmlFor="status">Status:</label>
                <select id="status" className='filter-select' value={filters.completed||"all"} onChange={(e) => setFilters({...filters, completed: e.target.value})}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                </select>
            </div>
            
            <div className="filter-input-container">
                <label className="input-label" htmlFor="deadline">Deadline:</label>
                <select id="deadline" className='filter-select' value={filters.deadline||"all"} onChange={(e) => setFilters({...filters, deadline: e.target.value})}>
                <option value="all">All</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
                </select>
            </div>
            
        </div>
       
        </div>
    )
}
export default Filters;