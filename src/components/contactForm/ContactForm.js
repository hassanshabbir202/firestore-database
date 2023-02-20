import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addDoc , collection } from "firebase/firestore"
import { db } from "../firebase/Firebase"

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    option: "",
    messege: "",
  });

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setContactData({ ...contactData, [name]: value });
  };

   const submitForm = async (event) => {
    event.preventDefault();
    const {username , email , option , messege} = contactData
      await (addDoc(collection(db , "contactform"),{
        username : contactData.username,
        email : contactData.email,
        option : contactData.option,
        messege : contactData.messege
      }).then((res)=>{
         if(res){
          alert("Data Stored");
         }
      }).catch((err)=>{
        alert("Plz Fill Out this Fields!" + err)
      })
      )
    }
   

  return (
    <div>
      <Form>
        <h1>Contact Form</h1>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={contactData.username}
            style={{width:"500px"}}
            onChange={handleChange}
            name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={contactData.email}
            style={{width:"500px"}}
            onChange={handleChange}
            name='email'
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          value={contactData.option}
          style={{width:"500px"}}
          onChange={handleChange}
          name="option"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} value={contactData.messege}
          style={{width:"500px"}}
          onChange={handleChange} 
          name="messege"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Contact Form
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
