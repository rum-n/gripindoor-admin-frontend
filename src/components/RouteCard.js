import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import route1 from './../assets/route1.jpg';
import './sidebar.scss';

function RouteCard() {
  return (
    <div>
        <Card style={
            { 
                width: '18rem', 
                marginRight: '2rem', 
                marginBottom: '2rem'
            }}>
            <Card.Img variant="top" src={route1} />
            <Card.Body>
                <Card.Title>Category: 6b</Card.Title>
                <Card.Title>Set by:</Card.Title>
                <Card.Title>Date added:</Card.Title>
                <Button variant="outline-dark">Open</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default RouteCard;