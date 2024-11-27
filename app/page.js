"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullname: z.string().min(5, "Name must  contain atleat 5 letters").max(20),
  email: z.string().email("Invalid email address"),
  phonenumber: z
    .string()
    .min(10, "Mobile Number must  contain 10 digits")
    .max(14,"Mobile Number not exceed 14 digits"),

  billnumber: z
    .string()
    .min(5, "Bill number must be at least 5 characters long")
    .max(10, "Bill number cannot exceed 10 characters"),

  enquiry: z
    .string()
    .min(200, "minimum 200 words")
    .max(2000, "maximum 2000 words"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  console.log(useForm());

  const sendInfo = (data) => {
    console.log("send the info to server:", data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        backgroundColor: "lightgoldenrodyellow",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column", 
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Mobile Service Center</h2>
      </div>

      <div
        style={{
          border: "2px solid gray",
          backgroundColor: "ivory",
          boxShadow: "2px 2px 2px 0.5px gray ",
          padding: "30px",
          width: "90%",

          marginTop: "20px",
          marginLeft: "20px",
        }}
      >
        <h4 style={{ textAlign: "center", fontSize: "30px" }}> Enquiry Form</h4>

        <form onSubmit={handleSubmit(sendInfo)}>
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              {...register("fullname")}
              style={{
                padding: "10px",
                backgroundColor: "lightgray",
                border: errors.fullname ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "100%",
                marginTop: "10px",
              }}
            />
            {errors.fullname && (
              <small style={{ color: "red" }}>{errors.fullname.message}</small>
            )}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email")}
              style={{
                padding: "10px",
                backgroundColor: "lightgray",
                border: errors.age ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "100%",
                marginTop: "10px",
              }}
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email.message}</small>
            )}
          </div>

          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              {...register("phonenumber")}
              style={{
                padding: "10px",
                backgroundColor: "lightgray",
                border: errors.age ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "100%",
                marginTop: "10px",
              }}
            />
            {errors.phonenumber && (
              <small style={{ color: "red" }}>
                {errors.phonenumber.message}
              </small>
            )}
          </div>

          <div>
            <input
              type="number"
              name="billnumber"
              placeholder="Bill Number"
              {...register("billnumber")}
              style={{
                padding: "10px",
                backgroundColor: "lightgray",
                border: errors.age ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "100%",
                marginTop: "10px",
              }}
            />
            {errors.billnumber && (
              <small style={{ color: "red" }}>
                {errors.billnumber.message}
              </small>
            )}
          </div>

          <div>
            <textarea
              type="text"
              name="enquiry"
              placeholder="enter your Enquiry here!"
              {...register("enquiry", {
                required: "This field is required",
                maxLength: {
                  value: 200,
                  message: "Not more than 200 words",
                },
              })}
              style={{
                padding: "10px",
                backgroundColor: "lightgray",
                border: errors.description ? "1px solid red" : "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                width: "100%",
                marginTop: "10px",
              }}
            />
            {errors.enquiry && (
              <small style={{ color: "red" }}>{errors.enquiry.message}</small>
            )}
          </div>

          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              borderRadius: "5px",
              padding: "15px",
              width: "100px",
              borderColor: "orange",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
