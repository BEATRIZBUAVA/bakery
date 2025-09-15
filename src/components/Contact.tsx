import React from "react";
import { MapPin, Clock, Phone, AtSign, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#f5f1ec] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto de contato */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contato</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-gray-600 w-5 h-5" />
              Rua dos doces, Docelândia - SP
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-gray-600 w-5 h-5" />
              Horário: 9h - 18h
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gray-600 w-5 h-5" />
              (11) 909987454
            </li>
            <li className="flex items-center gap-3">
              <AtSign className="text-gray-600 w-5 h-5" />
              @bakery
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gray-600 w-5 h-5" />
              bakery@gmail.com
            </li>
          </ul>
        </div>

        {/* Google Maps */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.608012902341!2d-46.63338298446196!3d-23.58806846856151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c5e2bafc4f%3A0xa9df52e5d6d8f68d!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
