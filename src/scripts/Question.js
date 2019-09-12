import React from 'react';
import { Row, Col, Card, Input, Button, Divider } from "antd";
import TextArea from "antd/lib/input/TextArea";
import './Question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }
    render() {
        return (
            <Row type="flex" justify="center">
                <Col xs={24}>
                    <Card title={<span style={{fontSize:20}}>اگر سوالی دارید ، اینجا بپرسید</span>} xs={24}>
                        <Row type="flex" gutter="24">
                            <Col xs={24} md={12}>
                                <Row type="flex">
                                    <Col xs={24}>
                                        <Input style={{ fontSize: 22 }} placeholder="نام" />
                                    </Col>
                                </Row>
                                <Row type="flex" style={{ paddingTop: 15 }}>
                                    <Col xs={24}>
                                        <Input style={{ fontSize: 22 }} placeholder="ایمیل" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} md={12}>
                                <TextArea style={{ fontSize: 22 }} placeholder="سوال یا نظر" autosize={{ minRows: 3, maxRows: 3 }}></TextArea>
                            </Col>
                        </Row>
                        <Divider></Divider>
                        <Row type="flex" justify="end">
                            <Col xs={15}>
                                <Button type="primary" style={{ fontSize: 16, marginLeft: 15 }}>ثبت سوال</Button>
                                <Button style={{ fontSize: 16 }}>خالی کردن</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}

Question.propTypes = {

};

export default Question;