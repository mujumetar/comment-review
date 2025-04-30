import React from 'react'
import { Container, Row } from 'react-bootstrap';


function List({ data, setTask, setData, avt_img }) {





    function delTask(id) {
        const deleData = data.filter((ele) => ele.id != id)
        setData(deleData)

    }


    return (
        <>
            <Container className='my-2 w-auto border'>
                <Row>
                    {
                        data.map((ele) => (

                            <div className="col-md-4 border">
                                <div className="card p-3 text-center px-4">

                                    <div className="user-image">

                                        <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80"
                                        />

                                    </div>

                                    <div className="user-content">

                                        <h5 className="mb-0">{ele.name}</h5>
                                        <div>{[...Array(Number(ele.rating))].map(() => <span>⭐</span>)}</div>
                                        <p>{ele.task}</p>

                                    </div>



                                </div>
                            </div>


                        ))

                    }
                </Row>
            </Container>
        </>
    )
}

export default List;