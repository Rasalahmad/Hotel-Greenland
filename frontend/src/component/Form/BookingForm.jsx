import React from "react";
import styled from "styled-components";

const BookingForm = () => {
  return (
    <Container>
      <LoginInfo>
        You are booking as guest, LOGIN or REGISTER if you want to save your
        reservation on your account.
      </LoginInfo>
      <Form>
        <Head>Add Your Informations :</Head>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Name *</Label>
            <Input type="text" />
          </div>
          <div className="w-1/2">
            <Label>Surname *</Label>
            <Input type="text" />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Email *</Label>
            <Input type="email" />
          </div>
          <div className="w-1/2">
            <Label>Telephone *</Label>
            <Input type="text" />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Address</Label>
            <Input type="text" />
          </div>
          <div className="w-1/2">
            <Label>City</Label>
            <Input type="text" />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Country</Label>
            <Input type="text" />
          </div>
          <div className="w-1/2">
            <Label>Zip</Label>
            <Input type="number" />
          </div>
        </div>
        <div>
          <Label className="mb-5">Request</Label>
          <TextArea className="w-full" rows="4" cols="50" />
        </div>
        <div className="w-full my-6">
          <Label>Arrival</Label>
          <Select>
            <option value="volvo">I don't know</option>
            <option value="saab">12.00 - 1.00 am</option>
            <option value="saab">1.00 - 2.00 am</option>
            <option value="saab">2.00 - 3.00 am</option>
            <option value="saab">4.00 - 5.00 am</option>
            <option value="saab">5.00 - 5.00 am</option>
            <option value="saab">5.00 - 6.00 am</option>
            <option value="saab">6.00 - 7.00 am</option>
            <option value="saab">7.00 - 8.00 am</option>
            <option value="saab">8.00 - 9.00 am</option>
            <option value="saab">9.00 - 10.00 am</option>
            <option value="saab">11.00 - 12.00 pm</option>
            <option value="saab">12.00 - 1.00 pm</option>
            <option value="saab">1.00 - 2.00 pm</option>
            <option value="saab">2.00 - 3.00 pm</option>
            <option value="saab">3.00 - 4.00 pm</option>
            <option value="saab">4.00 - 5.00 pm</option>
            <option value="saab">5.00 - 6.00 pm</option>
            <option value="saab">6.00 - 7.00 pm</option>
            <option value="saab">7.00 - 8.00 pm</option>
            <option value="saab">8.00 - 9.00 pm</option>
            <option value="saab">9.00 - 10.00 pm</option>
            <option value="saab">10.00 - 11.00 pm</option>
            <option value="saab">11.00 - 12.00 pm</option>
          </Select>
        </div>
        <div className="w-full my-6">
          <Label>Coupon</Label>
          <Input type="text" />
        </div>
        <div className="my-4 flex items-center">
          <input className="w-5 h-5" type="checkbox" id="tc" required />
          <label for="tc" className="ml-2 text-base cursor-pointer">
            Terms and Condition *
          </label>
        </div>
        <Button>Checkout</Button>
      </Form>
    </Container>
  );
};

export default BookingForm;

const Container = styled.div``;
const LoginInfo = styled.div`
  background: #6b6978;
  padding: 5px 20px;
  letter-spacing: 2.1px;
  color: white;
`;

const Form = styled.div``;
const Head = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 40px 0;
`;

const Label = styled.div`
  color: gray;
`;

const Input = styled.input`
  background: #e9e9e9;
  padding: 10px 20px;
  margin: 11px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const Select = styled.select`
  background: #e9e9e9;
  padding: 10px 20px;
  margin: 11px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: #e9e9e9;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 40px;
  background: #c4c4c4;
  font-size: 20px;
  font-weight: 600;
`;
