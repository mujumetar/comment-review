
import { Container, Row, Col, Table } from 'react-bootstrap';


export const AddTask = ({ HandleTask, setTask, task, star, setStar, setName,name }) => {


    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} className='my-5 position-absolute bottom-0 translate-middle-x translate-middle-y start-0 d-flex mx-auto w-100'>
                        <input type='text'  minlength="15"   className='form-control mx-2' placeholder='Write Your Name...' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type='text' className='form-control mx-2' placeholder='Submit Your Review...' value={task} onChange={(e) => setTask(e.target.value)} />
                        <select class="form-select" aria-label="Default select example"  onChange={(e)=> setStar(e.target.value)}>
                            <option >Rate Here...</option>
                            <option value="1">1 ⭐</option>
                            <option value="2">2 ⭐⭐</option>
                            <option value="3">3 ⭐⭐⭐</option>
                            <option value="4">4 ⭐⭐⭐⭐</option>
                            <option value="5">5 ⭐⭐⭐⭐⭐</option>
                        </select>
                        <button className='btn btn-warning' onClick={HandleTask}>⬆️</button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}


