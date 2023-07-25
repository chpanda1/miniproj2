import React, { useCallback, useState } from "react"
import Swal from "sweetalert2"
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap"

function MessagesModal(  
    {showModal,
    updateProductData,
    toggleShowModal,
    setEmptyArr
    }) {

    const {
        messageId: messageId,
        name: name,
        email: email,
        subject: subject,
        message: quantity,
    } = updateProductData
        
    const [messageID] = useState(messageId)
    const [contactName, setProductName] = useState(name)
    const [contactEmail, setProductDescription] = useState(email)
    const [contactSubject, setProductPrice] = useState(subject)
    const [contactMessage, setProductQuantity] = useState(quantity)

    const handleProductName = useCallback((e) => {
        setProductName(e.target.value)
      }, [])
    
      const handleProductDescription = useCallback((e) => {
        setProductDescription(e.target.value)
      }, [])
    
      const handleProductPrice = useCallback((e) => {
        setProductPrice(e.target.value)
      }, [])
    
      const handleProductQuantity = useCallback((e) => {
        setProductQuantity(e.target.value)
      }, [])
    
      const handleUpdateProduct = useCallback(
        (e) => {
          e.preventDefault()
    
          const rawProductFormData = new FormData(e.target)
          // check if input value has no value
          for (const value of rawProductFormData.values()) {
            // alert(value)
            if (!value)
              return Swal.fire({
                title: "Invalid empty inputs!",
                icon: "warning",
                text: "Please fill up all required fields",
                showConfirmButton: false,
                timer: 1500,
              })
          }
    
          Swal.fire({
            title: "Success!",
            text: "Updating...",
            icon: "success",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              toggleShowModal(false)
            },
            willClose: () => {
              const updatedProductFormData = Object.fromEntries(rawProductFormData)
              setEmptyArr((prevProductsData) => {
                const oldProducts = prevProductsData.filter(
                  (localProduct) => localProduct.messageId !== messageID
                ) 
                return [
                  ...oldProducts,
                  { ...updatedProductFormData, messageId: messageID },
                ]
              })
            },
          })
        },
        [messageID, setEmptyArr, toggleShowModal]
      )
    
      return (
        <Modal isOpen={showModal}>
          <ModalHeader>Update Message</ModalHeader>
          <BTForm onSubmit={handleUpdateProduct}>
            <ModalBody>
              <FormGroup>
                <Label for='name'>Product Name: {contactName}</Label>
                <Col>
                  <Input type="hidden" name="messageId" id="messageId" value={messageID} />
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Name'
                    value={contactName}
                    onChange={handleProductName}
                  />
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Label for='email'>
                  Email: {contactEmail}
                </Label>
                <Col>
                  <Input
                    type='email'
                    rows={3}
                    name='email'
                    id='email'
                    placeholder='Enter email'
                    value={contactEmail}
                    onChange={handleProductDescription}
                  />
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Label for='subject'>
                  Subject: {contactSubject}
                </Label>
                <Col>
                  <Input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Enter subject'
                    value={contactSubject}
                    onChange={handleProductPrice}
                  />
                </Col>
              </FormGroup>
    
              <FormGroup>
                <Label for='message'>
                  Message: {contactMessage}
                </Label>
                <Col>
                  <Input
                    type='textarea'
                    name='message'
                    id='message'
                    placeholder='Enter message'
                    value={contactMessage}
                    onChange={handleProductQuantity}
                  />
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button variant='primary' type='submit'>
                Update
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  toggleShowModal(false)
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </BTForm>
        </Modal>
  )
}

export default MessagesModal
