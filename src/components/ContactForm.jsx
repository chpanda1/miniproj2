import React, {useEffect, useState, Component} from 'react';
import { useForm } from 'react-hook-form';
import Form from './Form.css';
import Messages from './Messages';
import MessagesModal from './MessagesModal';
import Typography from "@mui/material/Typography";
import AdminLogin from './AdminLogin';
import Cookies from 'js-cookie';

const ContactForm = () => {

  const [show, setShow] = useState(true);
  const [showModal, toggleShowModal] = useState(false);
  const [updateProductData, setUpdateProductData] = useState({});
  const [id, setId] = useState(0);
  const dateId = Date.now();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const loadData = localStorage.getItem('Message') ? JSON.parse(localStorage.getItem('Message')) : [];
  const [emptyArr, setEmptyArr] = useState(loadData);
 
  const onSubmit = async (data) => {
    const date = Date.now();
    setId(date);
    const { messageId, name, email, subject, message } = data;
    alert(JSON.stringify(data))
    setEmptyArr([...emptyArr, data]);
    reset()
  };

  useEffect(() => {
    localStorage.setItem('Message', JSON.stringify(emptyArr));
  }, [emptyArr]);

  return (
    <div className='ContactForm'>
      <div className='container rounded-3 shadow-lg'>
      <Typography component="h1" variant="h5" className='text-center fs-1 text-white'>
          Contact Us
        </Typography>
        <div className='row'>
          <div className='col-12 text-center mAxisX'>
            <div className='contactForm p-3'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow mb-3'>
                  <div className='col-9 invisible'>
                    <input
                      type='number'
                      name='messageId'
                      {...register('messageId', {
                        setValueAs: id => parseInt(id),
                      })}
                      className='form-control formInput'
                      placeholder='ID'
                      value={id === 0 ?  dateId : id}
                    ></input>
                  </div>
                  <div className='col-9'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                </div>
                <div className='row formRow mb-3'>
                  <div className='col-9'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow mb-3'>
                  <div className='col-9'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow mb-3'>
                  <div className='col-9'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn btn btn-primary mRight' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>      
      {
        show ? 
        <Messages emptyArr={emptyArr} setEmptyArr={setEmptyArr} setUpdateProductData={setUpdateProductData} toggleShowModal={toggleShowModal}/>
        :null
      }
      <MessagesModal
      showModal = {showModal}
      updateProductData = {updateProductData}
      toggleShowModal = {toggleShowModal}
      setEmptyArr = {setEmptyArr}
      emptyArr={emptyArr}
      /> 
      <div className='invisible'>
        <AdminLogin show={show} setShow={setShow}/> 
      </div>     
    </div>

  );
};

export default ContactForm;