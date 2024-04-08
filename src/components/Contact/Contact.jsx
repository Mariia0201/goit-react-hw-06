import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'


function Contact({ name, number, handleDelete, id  }) {
    
    return (
        <>
    <div className={css.contactWrapper}>
          <div className={css.contactInfo}>
              <IoMdPerson className={css.contactIcon} />
              <p>{ name}</p>
          </div>
          <div className={css.contactInfo}>
              <FaPhoneAlt className={css.contactIcon} />
              {number}
                </div>
                
        </div>
        <button className={css.deleteBtn} onClick={() => handleDelete(id)} >Delete </button>
          </>  
     
  )
}

export default Contact

