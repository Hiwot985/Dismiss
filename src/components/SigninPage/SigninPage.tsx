import React from "react";
import "../../App.css";
import { pages } from '../../App'
import logo from "../../assets/Logo.png"

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


interface SigninPageProps {//Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
    changePage: (page: pages) => void;
    //saveSignInfo: (e: string, p: string) => void; //no Redux; gives error now
}

export default class SigninPage extends React.Component<SigninPageProps, any> {

    emailRef: React.RefObject<HTMLInputElement>;
    passwordRef: React.RefObject<HTMLInputElement>;

    //emailPasswordDB = [{email: "a@aa.com", password: "password"}, {email: "b@bb.com", password: "password"} ]; //rejected idea

    emailDB = ["v-alittl@microsoft.com", "v-sharme@microsoft.com", "v-jomens@microsoft.com", "v-rabmo@microsoft.com", "v-htades@microsoft.com", "dan.clay@microsoft.com", "daniel.walzenbach@microsoft.com"];
    pwdDB = ["alittl", "sharme", "jomens", "rabmo", "htades", "dan", "daniel"]; //making 2 arrays of email-password pairs for pseudo authentication. Users who insert anything other than the email-password pairs listed here won't be navigated to the HomePage

    constructor(props: any) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    render() {
        return (
            <div className="main">
                <div className="header">
                    <button>About Us</button>
                    <button>Contact</button>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo shows up" style={{ width: "400px" }}></img>
                    <h1>Dismiss Misinformation with More Information!</h1>
                </div>
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <FormControl
                                type="email"
                                placeholder="Email"
                                ref={this.emailRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={this.passwordRef} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button type="submit" variant="primary">Sign in</Button>
                        {/* <Button onClick={(e) => this.props.changePage(pages.RatingPage)} variant="primary" type="submit">
                            Submit
                        </Button>  */}
                    </Form>
                </div>
            </div>
        )
    };

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("TEST");

        if (this.emailRef.current == null || this.passwordRef.current == null) {
            alert('INTERNAL ERROR: missing reference!');
            return;
        }
        // One of the fields is empty? If one of the fields is empty, we stay on the page
        // otherwise we go to the page HomePage

        let email = this.emailRef.current.value;
        let passwd = this.passwordRef.current.value;
        //let p = { email: email, password: passwd };
        let index1 = this.emailDB.indexOf(email);
        let index2 = this.pwdDB.indexOf(passwd);

        //console.log("Email", email);
        //console.log("Password", passwd);

        if (email == "" || passwd == "") {
            console.log("Empty field ");
            alert("Empty field");
        } else {
            console.log("No empty fields");
            //test that the pair (email, passwd) is in the DB
            let p = {email: email, password: passwd};
            //console.log("DB", this.emailPasswordDB);
            console.log("p", p);
            //console.log("indexof", this.emailPasswordDB.indexOf(p));
            console.log("*****");
            let index1 = this.emailDB.indexOf(email);
            console.log("index1", index1);
            let index2 = this.pwdDB.indexOf(passwd);
            console.log("index2", index2);
            //if (this.emailPasswordDB.indexOf(p) > -1){
            if (index1 > -1 && index2 > -1 && index1 == index2) {
                console.log("User in the DB");
                this.props.changePage(pages.HomePage)
            } else {
                alert("User is not recognized");
                console.log("User not recognized in the DB");
            }

        }
        //    this.props.saveSignInfo(this.emailRef.current.value, this.passwordRef.current.value); //gives error because no Redux implementation now   

    }

}



