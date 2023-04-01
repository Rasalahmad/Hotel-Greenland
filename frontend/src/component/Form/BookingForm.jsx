import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const BookingForm = ({ price }) => {
  const { register, handleSubmit, errors } = useForm();
  const { night } = useSelector((state) => state.room);

  const onSubmit = (data) => {
    const finalData = { ...data, amount: Number(night) * Number(price) };
    console.log(finalData);
  };

  return (
    <Container>
      <LoginInfo>
        You are booking as guest, LOGIN or REGISTER if you want to save your
        reservation on your account.
      </LoginInfo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Head>Add Your Informations :</Head>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Name *</Label>
            <Input type="text" {...register("name")} />
          </div>
          {errors?.name && <span>This field is required</span>}
          <div className="w-1/2">
            <Label>Surname *</Label>
            <Input type="text" {...register("surename")} />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Email *</Label>
            <Input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
          </div>
          <div className="w-1/2">
            <Label>Telephone *</Label>
            <Input
              type="text"
              {...register("telephone", {
                required: true,
                pattern: /^01[3-9]\d{8}$/,
              })}
            />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Address</Label>
            <Input type="text" {...register("address")} />
          </div>
          <div className="w-1/2">
            <Label>City</Label>
            <Input type="text" {...register("city")} />
          </div>
        </div>
        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Country</Label>
            <Input type="text" {...register("country")} />
          </div>
          <div className="w-1/2">
            <Label>Zip</Label>
            <Input type="number" {...register("zip")} />
          </div>
        </div>
        <div>
          <Label className="mb-5">Request</Label>
          <TextArea
            className="w-full"
            rows="4"
            cols="50"
            {...register("request")}
          />
        </div>
        <div className="w-full my-6">
          <Label>Arrival</Label>
          <Select {...register("arrival")}>
            <option value="not select">I don't know</option>
            <option value="12.00 - 1.00 am">12.00 - 1.00 am</option>
            <option value="1.00 - 2.00 am">1.00 - 2.00 am</option>
            <option value="2.00 - 3.00 am">2.00 - 3.00 am</option>
            <option value="4.00 - 5.00 am">4.00 - 5.00 am</option>
            <option value="5.00 - 5.00 am">5.00 - 5.00 am</option>
            <option value="5.00 - 6.00 am">5.00 - 6.00 am</option>
            <option value="6.00 - 7.00 am">6.00 - 7.00 am</option>
            <option value="7.00 - 8.00 am">7.00 - 8.00 am</option>
            <option value="8.00 - 9.00 am">8.00 - 9.00 am</option>
            <option value="9.00 - 10.00 am">9.00 - 10.00 am</option>
            <option value="11.00 - 12.00 pm">11.00 - 12.00 pm</option>
            <option value="12.00 - 1.00 pm">12.00 - 1.00 pm</option>
            <option value="1.00 - 2.00 pm">1.00 - 2.00 pm</option>
            <option value="2.00 - 3.00 pm">2.00 - 3.00 pm</option>
            <option value="3.00 - 4.00 pm">3.00 - 4.00 pm</option>
            <option value="4.00 - 5.00 pm">4.00 - 5.00 pm</option>
            <option value="5.00 - 6.00 pm">5.00 - 6.00 pm</option>
            <option value="6.00 - 7.00 pm">6.00 - 7.00 pm</option>
            <option value="7.00 - 8.00 pm">7.00 - 8.00 pm</option>
            <option value="8.00 - 9.00 pm">8.00 - 9.00 pm</option>
            <option value="9.00 - 10.00 pm">9.00 - 10.00 pm</option>
            <option value="10.00 - 11.00 pm">10.00 - 11.00 pm</option>
            <option value="11.00 - 12.00 pm">11.00 - 12.00 pm</option>
          </Select>
        </div>
        {/* <div className="w-full my-6">
          <Label>Coupon</Label>
          <Input type="text" />
        </div> */}
        <div className="my-4 flex items-center">
          <input className="w-5 h-5" type="checkbox" id="tc" required />
          <label for="tc" className="ml-2 text-base cursor-pointer">
            Terms and Condition *
          </label>
        </div>
        <Button type="submit" value={"Checkout"} />
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

const Form = styled.form``;
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

const Button = styled.input`
  padding: 12px 40px;
  background: #c4c4c4;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
