function FormInput() {
  return (
    <div className="form-input">
      <div className="flex flex-row gap-4">
        <div>
          <h3 className="text-xl font-medium">Mobile Number</h3>
          <p className="">+135 773 4442</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Email Address</h3>
          <p className="">demo@demo.com</p>
        </div>
      </div>
      <form className="flex flex-col my-10"> 
        <h4 className="text-2xl font-medium">Make An Appoinment</h4>
                <input className="my-3.5 px-4 py-1 bg-lightBlue" type="text" name="name" id="name" placeholder="Your Name" required/>
                <input className="my-3.5 px-4 py-1 bg-lightBlue" type="email" name="email" id="email" placeholder="Your Email" required/>
                <textarea className="my-3.5 px-4 py-1 bg-lightBlue" name="message" id="message" cols="25" rows="7" placeholder="Your Message" required></textarea>
      </form>
    </div>
  );
}

export default FormInput;
