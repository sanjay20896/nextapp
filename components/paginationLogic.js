function renderPagination(props) {
        let jsx = []
        if (props.pageNo != 1)
            jsx.push(<a href={ `/?page=${props.pageNo - 1}` } >previous</a>)
        for (let i = 1; i <= props.totalPages; i++){
            jsx.push(<a className={`pagination-link ${props.pageNo==i?"current":""}`} href={ `/?page=${i}` } >{i}</a>)
        }
        if (props.pageNo != props.totalPages)
            jsx.push(<a href={ `/?page=${props.pageNo + 1}` } >next</a>)
        return (
            <>
            { jsx }
            <style jsx>{`
                .pagination-link{
                    margin:0 1rem;
                }
                .pagination-link.current{
                    font-weight:bold;
                }
            `}</style>
            </>
        )
    }
    
export default renderPagination