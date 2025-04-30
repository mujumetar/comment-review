
import { Container, Row, Col, Table } from 'react-bootstrap';


export const AddTask = ({ HandleTask, setTask, task, star, setStar, setName, name }) => {


    return (
        <>

            <Container>
                <Row>

                    <Col lg={4} className=' position-fixed  py-5 bottom-0 start-0 d-flex flex-column g-5  mx-auto w-100'>
                        <label htmlFor="" >Name:</label>
                        <input type='text' required minLength="15" className='form-control mx-2 mb-2' placeholder='Write Your Name...' value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="">minimum 15 words:</label>
                        <input type='text' required className='form-control mx-2 mb-2' placeholder='Submit Your Review...' value={task} onChange={(e) => setTask(e.target.value)} />

                        <label htmlFor="">select stars:</label>

                        <select className="form-select mx-2 mb-2" required aria-label="Default select example" onChange={(e) => setStar(e.target.value)}>
                            <option >Rate Here...</option>
                            <option value="1">1 ⭐</option>
                            <option value="2">2 ⭐⭐</option>
                            <option value="3">3 ⭐⭐⭐</option>
                            <option value="4">4 ⭐⭐⭐⭐</option>
                            <option value="5">5 ⭐⭐⭐⭐⭐</option>
                        </select>
                        <button className='btn btn-outline-warning mx-2 my-2' onSubmit={console.log("submitted!!")} onClick={HandleTask}>Send</button>
                    </Col>


                </Row>
            </Container>
        </>
    )
}


