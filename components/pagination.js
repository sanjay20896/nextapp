import RenderPagination from './paginationLogic'



function pagination(props) { 
return (
        <>
            <div className="pagination">
            <RenderPagination
                pageNo={ props.pageNo }
                totalPages={ props.totalPages }
                />
            </div>
            <style jsx>{`
            .pagination a{
                color:black;
                text-decoration:none;
                padding :8px 16px;
                float:left;
            }
         `}</style>
    </>
    )
    
}
export default pagination;