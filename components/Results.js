import Thumbnail from "./Thumbnail"

function Results({results}) {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center  gap-2 px-5 m-5 ">
            {results.map(result=>(
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results
