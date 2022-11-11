import React from "react";
import Style from './Paginator.module.css'

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div className={Style.amount}>
                {
                    pages.map((amount, id) => {
                        return (
                            <span key={id}
                                  className={currentPage === amount ? Style.active_selectedPage : Style.selectedPage}
                                  onClick={() => {
                                      onPageChanged(amount)
                                  }}>{amount}</span>
                        )
                    })
                }
            </div>
    )
}

export default Paginator