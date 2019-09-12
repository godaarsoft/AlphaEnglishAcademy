import React from 'react';
import { Row, Col } from "antd";
import Question from "./Question";


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col xs={24} lg={12}>
                    <Question></Question>
                </Col>
            </Row>
        );
    }
}

Contact.propTypes = {

};

export default Contact;