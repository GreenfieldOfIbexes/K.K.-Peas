import React from 'react'
import {Form} from 'react-bootstrap'

const Characteristics = props => {
    const characteristics = []
    
    for(var char in props.reviews.characteristics){
        characteristics.push([char, props.reviews.characteristics[char].id])
    }
    return (
        <>
        {characteristics.map((char) =>{
            return (
                <Form.Group required>
                    <Form.Label style={{marginRight: "100%", marginLeft: "5%"}}>{char[0]}:</Form.Label>
                        <div style={{display: "flex", justifyContent: 'center'}}>
                            <Form.Check
                            type="radio"
                            label="1"
                            name={char}
                            id={char[1]}
                            value={1}
                            onClick={props.handleChar}
                            inline
                            />
                            <Form.Check
                            type="radio"
                            label="2"
                            name={char}
                            id={char[1]}
                            value={2}
                            onClick={props.handleChar}
                            inline
                            />
                            <Form.Check
                            type="radio"
                            label="3"
                            name={char}
                            id={char[1]}
                            value={3}
                            onClick={props.handleChar}
                            inline
                            />
                            <Form.Check
                            type="radio"
                            label="4"
                            name={char}
                            id={char[1]}
                            value={4}
                            onClick={props.handleChar}
                            inline
                            />
                            <Form.Check
                            type="radio"
                            label="5"
                            name={char}
                            id={char[1]}
                            value={5}
                            onClick={props.handleChar}
                            inline
                            />
                        </div>
                </Form.Group>
            )
        })}
        </>
    )
}

export default Characteristics