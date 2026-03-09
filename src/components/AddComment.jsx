import { Row, Form, Col, Button } from "react-bootstrap"
import React, { useEffect, useState } from "react"
function AddComment({asin, fetchComments}) {
    const [formData, setFormData] =useState({
        comment : '',
        rate:'',
        elementId: asin
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

useEffect (() =>{
    console.log(formData)
},[formData])

const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments`,
                {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWNlY2Y1Y2I1ZDAwMTU0ZjQzNTUiLCJpYXQiOjE3NzMwNzU5ODMsImV4cCI6MTc3NDI4NTU4M30.EN5xtmsfH8gQ7ws3H2Qz1j6bylelqcv3y7YqwdudXnY",
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(formData)
                },
            );
            fetchComments();
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="comment">
                    <Form.Label>comment</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Comment"
                        name = 'comment'
                        onChange={handleChange}
                        
                    />

                </Form.Group>
                <Form.Group as={Col} md="12" controlId="rate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="rate"
                        name = 'rate'
                        onChange={handleChange}

                    />

                </Form.Group>
                         <Button onClick={handleSubmit}  type="submit" size="sm" className="mt-4">Submit form</Button>
            </Row>
        </Form>
    )
}
export default AddComment