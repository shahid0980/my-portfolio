import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    content: 'Working with Sagar was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at Startup Inc',
    content: 'Sagar is a talented developer who consistently delivers high-quality work. His ability to understand requirements and translate them into elegant solutions is impressive.',
    avatar: '👩‍💼',
  },
  {
    name: 'Mike Chen',
    role: 'CTO at Innovation Labs',
    content: 'I highly recommend Sagar for any web development project. He brings creativity, technical skills, and professionalism to every project he works on.',
    avatar: '👨‍💻',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What people are saying about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-2 -left-2 w-8 h-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
