import React, { useState } from "react";
import { api } from "../../utils/api";

const Hero = () => {
  const bgUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop";
  return (
    <section className="relative h-64 md:h-80 bg-center bg-cover" style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contact Empire Bay Beach Bar</h1>
          <p className="mt-2 text-lg opacity-90">We'd love to hear from you</p>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", phone: "" });
  const [status, setStatus] = useState("");
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("sending");
      await api.postContact(form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", phone: "" });
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <div className="bg-orange-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <div className="mt-4 space-y-2 text-gray-700">
            <div><strong>Address:</strong> 123 Bar Street, Bagamoyo, Tanzania</div>
            <div><strong>Phone:</strong> +255 700 000 000</div>
            <div><strong>Email:</strong> info@empirebay.com</div>
            <div><strong>Social:</strong> @empirebay (IG/FB)</div>
          </div>
          <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={onSubmit}>
            <input name="name" value={form.name} onChange={onChange} className="rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-4 py-2" placeholder="Your Name" required />
            <input name="email" value={form.email} onChange={onChange} className="rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-4 py-2" placeholder="Email" type="email" required />
            <input name="subject" value={form.subject} onChange={onChange} className="rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-4 py-2" placeholder="Subject" required />
            <textarea name="message" value={form.message} onChange={onChange} className="rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-4 py-2" placeholder="Message" rows={5} required />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-max" disabled={status==="sending"}>{status==="sending"?"Sending...":"Send Message"}</button>
            {status==="sent" && <div className="text-green-600 text-sm">Message sent!</div>}
            {status==="error" && <div className="text-red-600 text-sm">Failed to send. Try again.</div>}
          </form>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Empire Bay Location"
              src="https://maps.google.com/maps?q=bagamoyo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-72"
              loading="lazy"
            />
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800">Opening Hours</h3>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>Mon - Thu: 5:00 PM – 12:00 AM</li>
              <li>Fri - Sun: 4:00 PM – 2:00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



