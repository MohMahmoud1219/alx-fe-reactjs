import { useState } from "react";

const RegistrationForm = () => {
  // إدارة البيانات باستخدام useState
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // التعامل مع التغييرات في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target; // استخراج name و value من العنصر
    setFormData((prevData) => ({
      ...prevData, // نسخ البيانات السابقة
      [name]: value, // تحديث قيمة الحقل بناءً على الاسم
    }));
  };

  // التحقق من الحقول قبل إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    // طباعة البيانات المرسلة
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
