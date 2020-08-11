import React from 'react'
import style from './Random.module.css'
import Pagination from './Pagination'

const axios = require('axios').default;

export default class ListOfQuotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            quotesPerPage: 20,
            quotes: [],
            currentQuotes: [],
            pageNumbers: [],
            totalQuotes: ''
        }
    }

    handleClick = async () => {
        const posts = await axios.get("https://programming-quotes-api.herokuapp.com/quotes")
            .then(res =>
                this.setState({
                    quotes: res.data,
                    totalQuotes: res.data.length
                })
            )
        const { totalQuotes, quotesPerPage, pageNumbers } = this.state
        for (let i = 1; i < Math.ceil(totalQuotes / quotesPerPage); i++) {
            this.setState({

                pageNumbers: [...this.state.pageNumbers, i]
            })
        }

    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    render() {
        // get the current page 
        console.log(this.state.pageNumbers)
        const { quotesPerPage, currentPage, totalQuotes, pageNumbers } = this.state
        const { quotes, quotesList } = this.state

        const indexOfLastQuote = currentPage * quotesPerPage;
        const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
        const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);
        console.log(currentQuotes)


        return (
            <>
                <div className={style.btn}>
                    <button onClick={this.handleClick}>Get Quotes</button>

                </div>
                <Pagination pagenumbers={pageNumbers} paginate={this.paginate} />

                <div>
                    {currentQuotes.map(item =>
                        (<div key={item.id} className={style.quotes} >
                            <strong>Quotes:</strong> {item.en}
                            <br />
                            <strong> Author: </strong>{item.author}
                        </div>)
                    )}
                </div>
                <Pagination pagenumbers={pageNumbers} paginate={this.paginate} />
            </>
        )
    }
}