import React from "react";

const Excuses = {
  TBA: {
    message: "TO BE ANNOUNCED!",
    description: "Sit back and relax!",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
  TBU: {
    message: "TO BE UPDATED!",
    description: "Contact us for any queries",
    helperClass: "alert alert-info alert-dismissible fade show",
  },
  UnderDevelopmentPhase: {
    message: "Website is currently under development phase.",
    description: "Please come back later!",
    helperClass: "alert alert-danger alert-dismissible fade show",
  },
  RegistrationsClosed: {
    message: "REGISTRATIONS ARE CLOSED",
    description: "No refund of the registration fee.",
    helperClass: "alert alert-danger alert-dismissible fade show",
  },
};

const ExcuseCard = ({excuseType}) => {
  return (
    <div className={excuseType.helperClass} role="alert">
      <strong>{excuseType.message.toUpperCase()}</strong>
      <br />
      &nbsp; {excuseType.description} &nbsp;
    </div>
  );
};

export { ExcuseCard, Excuses };
