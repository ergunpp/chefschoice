import React from "react"
import axios from "axios"
import './style.scss'

class ContactForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
      result: "",
      alertType: "",
      formErrors: {
        email: "",
        name: "",
        message: "",
      },
      isFormValid: false,
      emailValid: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateField = (fieldName, value) => {
    if (fieldName === "email") {
     
      
      // const emailIsValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

      // eslint-disable-next-line no-useless-escape
      const UnicodeMailValidatorRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      const emailIsValid = UnicodeMailValidatorRegex.test(value)

      
      this.setState(prevState => ({
        emailValid: emailIsValid,
        formErrors: {
          email:emailIsValid === false ? emailIsValid : prevState.formErrors.email,
          name: prevState.formErrors.name,
          message: prevState.formErrors.message,
        },
        isFormValid: emailIsValid,
      }))
    }
  }

  handleChange = event => {
    const { target } = event
    const { value } = target
    const { name } = target

    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  changeHoneyPot=()=>{
    this.setState(prevState=>({
      honeypot:!prevState.honeypot
    }))
  }

  handleSubmit = event => {
    event.preventDefault()

    const { emailValid, honeypot, name, email, subject, message } = this.state
    // no need to check for === true, when compiled the code checks if the value is true
    if (emailValid) {
      if (!honeypot) {
        // const URL = "http://localhost:3000/postform"
        const URL='https://v9jg33e7pa.execute-api.us-east-1.amazonaws.com/beta/sendemail/'
        const cleanName = this.cleanInput(name.trim())
        const cleanEmail = this.cleanInput(email.trim())
        const cleanSubject = this.cleanInput(subject.trim())
        const cleanMessage = this.cleanInput(message.trim())

        axios
          .post(URL, {
            message: `Bilgiler şunlar:\nAdı:${cleanName}\nEmail Adresi: ${cleanEmail}\nKonu:${cleanSubject}\nMesaj:${cleanMessage}`,
            subject: `[Chef's Choice Web Sitesinden Doldurulan Form] ${cleanSubject}`,
            email: `info@atlaspet.com.tr`,
          })
          .then(() => {
            this.setState({
              name: "",
              email: "",
              message: "",
              subject: "",
              result: "Form başarıyla gönderildi.",
              alertType: "alert alert-success",
              emailValid:false,
              isFormValid:false
            })
          })
          .catch(() => {
            this.setState({
              result: "Form başarıyla gönderildi.",
              alertType: "alert alert-danger",
            })
          })
      } else {
        // eslint-disable-next-line no-console
        console.log("Hi there, I guess you are not human baby")
      }
    } else {
      this.setState({
        result: "Lütfen girmiş olduğunuz email adresini kontrol ediniz.",
        alertType: "alert alert-danger",
      })
    }
  }

  cleanInput = input => {
    const search = [
      "<script[^>]*?>.*?</script>", // Strip out javascript
      "<[/!]*?[^<>]*?>", // Strip out HTML tags
      "<style[^>]*?>.*?</style>", // Strip style tags properly
      "<![sS]*?--[ \t\n\r]*>", // Strip multi-line comments
    ]
    let text = input
    for (let i = 0; i < search.length; i += 1) {
      text = text.replace(new RegExp(search[i], "gi"), "")
    }
   
    return text
  }

  render() {
    const {
      alertType,
      result,
      honeypot,
      name,
      email,
      subject,
      message,
      isFormValid
    } = this.state
   
    return (
       /* eslint-disable */
      <div>
        
        <form id="contact-form" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          name="honeypot"
          type="text"
          style={{ display: "none" }}
          value={honeypot}
          onChange={this.handleChange}
        />
        <div className={alertType}>{result !== "" && result}</div>
        <div>
          <div className="multiple">
            <label>İsim</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="multiple">
            <label>Email</label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Konu</label>
            <input
              className="form-control"
              name="subject"
              type="text"
              value={subject}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Mesajınız</label>
            <input
              className="form-control"
              name="message"
              type="text"
              value={message}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-primary btn-block mt-5 mb-5"
            type="submit"
            onClick={this.handleSubmit} disabled={!isFormValid}
          >
            Gönder
          </button>
          
        </div>
      </form>
      {/* eslint-enable */}
      </div>
      
    )
  }
}

export default ContactForm