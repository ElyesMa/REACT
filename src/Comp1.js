import './Comp1.css';
import ReactStars from "react-rating-stars-component";
import {Form,Button} from 'react-bootstrap';

function Comp1() {
  return (
    <div className="Comp1">
      <header className="Comp1-header">
        <img id="logo2" src="./Logo2.png" alt=""></img>
        <img id="logo1" src="./Logo1.png" alt=""></img>
        <h1> MY <span>FIRST</span> APPLICATION</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="submit" marginLeft="100px">
          Subscribe
        </Button>
      </Form>
      <h6>Evaluate our Application</h6>
      <ReactStars
      count={6}
      size={24}
      activeColor="#ffd700"
      />
      </header>
    </div>
  );
}

export default Comp1;