import React from "react";
import { Contacto, Formulario } from "./Contact.style";
import Section from "../../components/Section/Section";

export default function Contact() {
  return (
    <Contacto>
      <Section text="Contact" />
      <form action="">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
              <label htmlFor="">name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
          <div className="mt-3 mt-3">
              <label htmlFor="">name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </Contacto>
  );
}
