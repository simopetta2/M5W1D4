import { Row, Form, Col } from "react-bootstrap"
import React, { useEffect, useState } from "react"

function AddComment(asin) {
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


const handleSubmit = () => {}



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
            </Row>
        </Form>
    )
}
export default AddComment