import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import ErrorMessage from "../Error/ErrorMessage";
import { useGetUserBookingQuery } from "../../features/booking/bookingApi";

const BookingForm = ({ onSubmit, payLater, setPayLater }) => {
  const { user } = useContext(AuthContext);
  const { data: previousBooking, isLoading } = useGetUserBookingQuery({
    email: user?.email,
    limit: "1",
  });
  console.log(previousBooking);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Prefill form when previousBooking is available
  useEffect(() => {
    if (previousBooking?.data?.length > 0) {
      const latestBooking = previousBooking?.data[0]; // Get the most recent booking
      setValue("name", latestBooking.cus_name || user?.displayName || "");
      setValue("email", latestBooking.cus_email || user?.email || "");
      setValue("phone", latestBooking.cus_phone || "");
      setValue("address", latestBooking.cus_add1 || "");
      setValue("city", latestBooking.cus_city || "");
      setValue("country", latestBooking.cus_country || "");
      setValue("zip", latestBooking.cus_postcode || "");
      setValue("request", latestBooking.request || "");
      setValue("arrival", latestBooking.arrival || "not select");
    }
  }, [previousBooking, setValue, user]);

  return (
    <Container>
      <LoginInfo>
        You are booking as guest, LOGIN or REGISTER if you want to save your
        reservation on your account.
      </LoginInfo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Head>Please fill the form to get your booking</Head>

        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Name *</Label>
            <Input type="text" {...register("name", { required: true })} />
            {errors?.name && <ErrorMessage message="Name is required" />}
          </div>
          <div className="w-1/2">
            <Label>Surname</Label>
            <Input type="text" {...register("surename")} />
          </div>
        </div>

        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Email *</Label>
            <Input type="email" {...register("email", { required: true })} />
            {errors?.email && <ErrorMessage message="Email is required" />}
          </div>
          <div className="w-1/2">
            <Label>Phone Number *</Label>
            <Input type="text" {...register("phone", { required: true })} />
            {errors?.phone && (
              <ErrorMessage message="Phone number is required" />
            )}
          </div>
        </div>

        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Address *</Label>
            <Input type="text" {...register("address", { required: true })} />
            {errors?.address && <ErrorMessage message="Address is required" />}
          </div>
          <div className="w-1/2">
            <Label>City *</Label>
            <Input type="text" {...register("city", { required: true })} />
            {errors?.city && <ErrorMessage message="City is required" />}
          </div>
        </div>

        <div className="flex gap-5 my-6">
          <div className="w-1/2">
            <Label>Country *</Label>
            <Input type="text" {...register("country", { required: true })} />
            {errors?.country && <ErrorMessage message="Country is required" />}
          </div>
          <div className="w-1/2">
            <Label>Zip *</Label>
            <Input type="number" {...register("zip", { required: true })} />
            {errors?.zip && <ErrorMessage message="ZIP is required" />}
          </div>
        </div>

        <div>
          <Label className="mb-5">Request *</Label>
          <TextArea
            className="w-full"
            rows="4"
            cols="50"
            {...register("request", { required: true })}
          />
        </div>

        <div className="w-full my-6">
          <Label>Arrival *</Label>
          <Select {...register("arrival", { required: true })}>
            <option value="not select">I don't know</option>
            <option value="12.00 - 1.00 am">12.00 - 1.00 am</option>
            <option value="1.00 - 2.00 am">1.00 - 2.00 am</option>
            <option value="2.00 - 3.00 am">2.00 - 3.00 am</option>
            <option value="4.00 - 5.00 am">4.00 - 5.00 am</option>
            <option value="5.00 - 6.00 am">5.00 - 6.00 am</option>
            <option value="6.00 - 7.00 am">6.00 - 7.00 am</option>
            <option value="7.00 - 8.00 am">7.00 - 8.00 am</option>
            <option value="8.00 - 9.00 am">8.00 - 9.00 am</option>
          </Select>
          {errors?.arrival && (
            <ErrorMessage message="Arrival time is required" />
          )}
        </div>

        <div className="flex gap-5">
          <div className="my-4 flex items-center">
            <input className="w-5 h-5" type="checkbox" id="tc" required />
            <label htmlFor="tc" className="ml-2 text-base cursor-pointer">
              Terms and Condition *
            </label>
          </div>
        </div>

        <Button type="submit" value={payLater ? "Pay In Cash" : "Checkout"} />
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
