import CommentList from "./CommentList.jsx"
import AddComment from "./AddComment.jsx"
import { useEffect, useState } from "react"


function CommentArea({ book }) {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments`,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWNlY2Y1Y2I1ZDAwMTU0ZjQzNTUiLCJpYXQiOjE3NzE2MTQwMjcsImV4cCI6MTc3MjgyMzYyN30.iCafVNd0I6txbbZjvttQnH4yFyjeUorrMuKPtKadaQ8",
                    }
                }
            )

            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => { fetchComments() }, [])
    return (

        <>
            <AddComment asin ={book.asin} />
            <CommentList comments={comments} />


        </>
    )
}
export default CommentArea