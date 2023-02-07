import React from "react";
import Style from './Paginator.module.scss'

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = React.useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize
    const rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={Style.amount}>
                { portionNumber > 1 &&
                <button className={Style.button} onClick={() => {setPortionNumber(portionNumber -1)}}>
                    {"<"}
                </button>}
                {
                    pages
                        .filter(page => page >= leftPortionPageNumber && page<rightPortionPageNumber)
                        .map((amount, id) => {
                        return (
                            <span key={id}
                                  className={currentPage === amount ? Style.active_selectedPage : Style.selectedPage}
                                  onClick={() => {
                                      onPageChanged(amount)
                                  }}>{amount}</span>
                        )
                    })
                }
                { portionCount > portionNumber &&
                    <button className={Style.button} onClick={() => {setPortionNumber(portionNumber + 1)}}>
                        {'>'}
                    </button>}
            </div>
    )
}

export default Paginator
