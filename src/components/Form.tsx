import axios from 'axios';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';


// interface Contact {
//   _id: string;
//   name: {
//     phone: string;
//     email: string;
//     message: string;
//   };
// }

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  tel: z.number({ invalid_type_error: "Phone number is required" }),
  email: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {

  // Fetching data
  const [formData, setFormData] = useState({
    recipientEmail: '', 
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setIsSubmitting(true); // Disable the button
      await axios.post('http://localhost:3000/api/submit-data', formData);
      console.log('Data sent successfully!');
      window.location.href = "/Success";
      // Handle successful data submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error
    } finally {
      setIsSubmitting(false); // Enable the button
    }
  };



  // const [selectedEmail, setSelectedEmail] = useState('');
  
  const emailOptions = [
    { value: 'gm@mtcouncil.com', label: 'General Manager' },
    { value: 'kakuj424@gmail.com', label: 'Kaleb' },
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
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
          <span className="teritary font-2 md:text-2xl text-lg text-left mb-1"> Select Directory:</span>
        <select className='p-1 rounded'
        // value={formData.email} onChange={handleEmailChange}
        id="recipientEmail"
        name="recipientEmail" 
        value={formData.recipientEmail}
          onChange= {handleChange}
          onBlur={handleChange}
        >

          {/* directory options with email as the value, each value defined above ^ in a const */}
           <option value=""> </option>
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleChange}
          className="form-control"
        />

        {errors.name && (
          <p className="text-base text-red-300 ">{errors.name.message}</p>
        )}
      </div>


      <div className="teritary font-2 md:text-2xl text-lg text-left mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          {...register("tel", { valueAsNumber: true })}
          id="tel"
          placeholder="Enter phone number"
          type="number"
          name="phone"
          value={formData.phone} 
          onChange={handleChange}
          onBlur={handleChange}
          className="form-control"
        />
        {errors.tel && (
          <p className="text-base text-red-300 ">{errors.tel.message}</p>
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
          name="email" 
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="teritary font-2 md:text-2xl text-lg text-left mb-5">
        <label 
        className="form-label"
        htmlFor="textarea">Message</label>
        <textarea 
        className='form-control'
        name="message"
        placeholder="Enter your Message here ..."
        value={formData.message} 
        onChange={handleChange}
        onBlur={handleChange}
        >
        </textarea> 
      </div>
      

      <button 
      // Disable the button when submitting
  disabled={isSubmitting}
      // disabled={!isValid} 
      className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
