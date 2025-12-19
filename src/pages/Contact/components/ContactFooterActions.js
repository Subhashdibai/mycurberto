const ContactFooterActions = () => {
  return (
    <div className="contact-actions">
      <div className="attachment-wrap">
        <label className="attachment">
          <span className="icon">📎</span>
          <span>Add attachment</span>
          <input type="file" hidden />
        </label>
      </div>

      <button className="send-btn">Send request</button>

      <p className="recaptcha-text">
        This site is protected by reCAPTCHA and the Google{" "}
        <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
      </p>
    </div>
  );
};

export default ContactFooterActions;






// const ContactFooterActions = () => {
//   return (
//     <div className="contact-actions">
//       {/* Attachment */}
//       <label className="attachment">
//         <span className="icon">📎</span>
//         <span>Add attachment</span>
//         <input type="file" hidden />
//       </label>

//       {/* Submit */}
//       <button className="send-btn">Send request</button>

//       {/* Recaptcha text */}
//       <p className="recaptcha-text">
//         This site is protected by reCAPTCHA and the Google{" "}
//         <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
//       </p>
//     </div>
//   );
// };

// export default ContactFooterActions;
