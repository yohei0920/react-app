import React from 'react'

const LANGAGES = [
    "Ruby",
    "JavaScript",
    "Python",
    "Java",
    "C++"
]

export class List extends React.Component  {
    render() {
        return (
            <div>
        {
            LANGAGES.map( (lang, index) => {
                return(
                    <div key={ index } >
                        {lang}
                    </div>
                )
            } )
        }
      </div>
    )
   }
  }