const LANGAGES = [
    "Ruby",
    "JavaScript",
    "Python",
    "Java",
    "C++"
]

export const List = () => {
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