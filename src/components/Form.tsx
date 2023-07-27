import axios from 'axios';
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  tel: z.number({ invalid_type_error: "Phone number is required" }),
  email: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {

  const [selectedEmail, setSelectedEmail] = useState('');
  
  const emailOptions = [
    { value: 'gm@mtcouncil.com', label: 'General Manager' },
    { value: 'president@mtcouncil.com', label: 'Board of Directors' },
    { value: 'officeco@mtcouncil.com', label: 'Office Coordinator' },
    { value: 'pfm@mtcouncil.com', label: 'Parks and Facility Manager (Maintenance)' },
    { value: 'daycare@mtcouncil.com', label: 'Daycare Supervisor' },
    { value: 'facilityco@mtcouncil.com', label: 'Facilities Coordinator (Rentals)' },
    { value: 'rec@mtcouncil.com', label: 'Recreation & Events Coordinator' }
    // Add more email options as needed
  ];




  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <span className="teritary font-2 md:text-2xl text-lg text-left mb-1"> Select Directory:</span>
        <select 
        // value={formData.email} onChange={handleEmailChange}
        id="emailSelect"
          value={selectedEmail}
          onChange={e => setSelectedEmail(e.target.value)}
        >

          {/* directory options with email as the value, each value defined above ^ in a const */}
          <option value="">-- Select Directory --</option>
          {emailOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
         
        </select>
      <div className="teritary font-2 md:text-2xl text-lg text-left mb-3 mt-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="Enter Full Name"
          type="text"
          className="form-control"
        />

        {errors.name && (
          <p className="text-base text-red-300 ">{errors.name.message}</p>
        )}
      </div>

      <div className="teritary font-2 md:text-2xl text-lg text-left mb-3">
        <label htmlFor="name" className="form-label">
          Email Address
        </label>
        <input
          {...register("email", { required: true })}
          id="email"
          placeholder="Enter your email address"
          type="email"
          required
          className="form-control"
        />
      </div>

      <div className="teritary font-2 md:text-2xl text-lg text-left mb-5">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          {...register("tel", { valueAsNumber: true })}
          id="tel"
          placeholder="Enter phone number"
          type="number"
          className="form-control"
        />
        {errors.tel && (
          <p className="text-base text-red-300 ">{errors.tel.message}</p>
        )}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
