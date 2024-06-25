import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import f1 from "../src/Images/f1.png";
import f2 from "../src/Images/f2.png";
import f3 from "../src/Images/f3.png";
import f4 from "../src/Images/f4.png";
import f5 from "../src/Images/f5.png";
import f6 from "../src/Images/f6.png";
import f7 from "../src/Images/f7.png";
import customer from "../src/customer.scss";
import customerid from "../src/Images/customerid.png";
import Message from "../src/Images/Message.png";
import Location from "../src/Images/Location.png";
import call from "../src/Images/Call.png";
import line3 from "../src/Images/Line 3.png";
import { Typography } from "@mui/material";
import chart1 from "../src/Images/chart1.png";
import chart2 from "../src/Images/chart2.png";
import arrowdown from "../src/Images/arrowdown.png";
import BasicMenu from "./Btton";


function CustomerList() {
  return (
    <div class="row main-customer">
      <div class="col-lg-9 col-md-12 col-sm-12 col-12">
        <br />
        <Row className="rowco">
          <div class="col-lg-6 col-md-6 col-sm-12 col-12">
            {" "}
            <h3 id="customermain"> Customer List </h3>{" "}
          </div>
          <div class=" col-lg-6 col-md-12 col-sm-12 col-12 ">
            {" "}
            <Button id="addcustomer"> + Add Customer</Button>
          </div>
        </Row>
        <Row>
          <div>
            <ListGroup.Item id="userdsta">
              <div class="row  name">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  Name <img src={arrowdown} />
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  Email <img src={arrowdown} />{" "}
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  PhoneNumber <img src={arrowdown} />
                </div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  Gendar <img src={arrowdown} />
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12"></div>

              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  <img src={f1} /> John Deo{" "}
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  johndeo@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +33757005478</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar">Male</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  <img src={f2} />
                  shelby Goode
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  shelby@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +33557705478</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar2">Female</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f3} />
                  Robert Bacl
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  robert@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +335597078</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar">Male</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f4} />
                  John carilo
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  johancarlo@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +39845970767</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar">Male</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f5} />
                  Adriene watson
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  adrienwast@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +337865458</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar2">Female</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f6} />
                  jhyu Deo
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  jhyudeo@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +33878675544</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar">Male</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f7} />
                  Mark Ruffalo
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  markrufelo@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +3346566677</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar">Male</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  <img src={f2} />
                  Bethany Jackson
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  bethanyjak@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +3388777677</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  {" "}
                  <span className="gendar2">Female</span>
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
              <div class="row rowd">
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  {" "}
                  <img src={f1} /> Christine Huston{" "}
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12">
                  christinehust@gmail.com
                </div>
                <div class="col-3 col-md-3 col-sm-12 col-12"> +3375786868</div>
                <div class="col-2 col-md-2 col-sm-12 col-12">
                  <span className="gendar">Male</span>  
                </div>
                <div class="col-1 col-md-1 col-sm-12 col-12">
                         <BasicMenu/> 
                </div>
              </div>
              <br />
            </ListGroup.Item>
          </div>
        </Row>
      </div>
      <div class="col-lg-3  col-md-12 col-sm-12 col-12  colum2 ">
        <div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={customerid} />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight={"600"}
              fontFamily={"Nunito"}
              fontSize={"22px"}
              lineHeight={"30.01px"}
            >
              John Deo
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight={"400"}
              fontFamily={"Nunito"}
              fontSize={"14px"}
              lineHeight={"19.01px"}
              color={"rgba(108,122,137)"}
            >
              UI/Ux Designer
            </Typography>
          </div>
        </div>
        <div>
          <img src={line3} />
        </div>
        <div>
          <Typography
            color={"rgba(3, 2, 41, 1)"}
            fontWeight={"600"}
            fontSize={"18px"}
            lineHeight={"24.55px"}
          >
            Contact Info{" "}
          </Typography>
          <br />
          <div>
            <img src={Message} className=" contact-div" />
            <span className=" contact-div">Johandeo@gmil.com</span>
          </div>
          <div>
            <img src={line3} />
          </div>
          <div>
            <img src={call} className=" contact-div" />
            <span className=" contact-div">3375005467</span>
          </div>
          <div>
            <img src={line3} />
          </div>
          <div>
            <img src={Location} className=" contact-div" />
            <span className=" contact-div">2239 Hog camp Road Scaumburn</span>
          </div>
        </div>
        <div>
          <img src={line3} />
        </div>
        <div>
          <img src={chart1} />
        </div>
        <div>
          <img src={chart2} />
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
