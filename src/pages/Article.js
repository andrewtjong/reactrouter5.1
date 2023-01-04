import { useParams } from "react-router-dom"

export default function Article() {
    // returns an object with params that has all the route parameters from this page, so it will look at this page and see we have an id parameter
    // So it will give us back a params.id property that we can then use / that name is dictated by whatever we call that route parameter in App.js :id
    
    // const params = useParams()

    // use object destructuring to turn it into

    const { id } = useParams()

    return(
        <div>
            <p>Article Page - {id}</p>
        </div>
    )
}