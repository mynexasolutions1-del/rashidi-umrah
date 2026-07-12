import React from "react";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a 
        href="tel:+918094771024" 
        className="float-btn call-btn" 
        aria-label="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
      <a 
        href="https://wa.me/918094771024" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-btn wa-btn" 
        aria-label="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}
