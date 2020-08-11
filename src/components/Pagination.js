import React from 'react'



 export default class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
        }
    }
    render(){
        console.log()
        return(
            <>
            <nav>
                <ul className="pagination">
                    {this.props.pagenumbers.map(number=>
                        (<li key= {number} className="page-item">
                            <a onClick={()=>this.props.paginate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>)
                        )}
                </ul>
            </nav>
            </>
        )
    }
}