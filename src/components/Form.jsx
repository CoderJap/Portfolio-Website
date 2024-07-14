import React from 'react'
import "./FormStyles.css";


const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text"/>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject"/>
        <label htmlFor="message">Message</label>
        <textarea rows="6" placeholder="Type your message here" id="message"></textarea>
        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}

export default Form