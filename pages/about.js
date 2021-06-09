import Layout from 'containers/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <section className="relative py-16">
        <div className="max-w-4xl px-4 m-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl border border-gray-200 rounded-lg mt-10">
            <div className="px-6 text-lg">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center -mt-20">
                  <Image
                    alt="avatar"
                    src="/images/photo/avatar.jpg"
                    height={150}
                    width={150}
                    className=" rounded-full h-auto align-middle border-none "
                  />
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Damian Lis
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-900"></i>
                  Wrocław
                </div>
                <div className="mb-2 text-gray-700  mt-7">
                  <i className="fas fa-briefcase mr-2 text-blue-900 "></i>
                  <p className="my-1.5">
                    I am a <strong>Frontend Developer</strong>
                  </p>
                  <p className="my-1.5">who creates web applications,</p>
                  <p className="my-1.5">websites and many other web solutions.</p>
                </div>
              </div>
              <div className="mt-10 py-12 border-t border-gray-300">
                <div className="flex justify-center">
                  <div className="w-full md:w-10/12 sm:text-left md:text-justify  px-4">
                    <p className="mb-4  leading-relaxed text-gray-800">
                      Over a year and a half of continuous self study, I have been developing as a
                      <strong> frontend developer</strong> with a
                      <strong> basic backend skills</strong>.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-800">
                      I fell in love with programming because of the ability to create amazing
                      projects and developing my <strong>problem-solving skills</strong>.
                    </p>
                    <p className="leading-relaxed text-gray-800">
                      Generaly I love creating e-commerce sites <strong>(React/Express)</strong> and
                      pseudo-intelligent apps like chatbot <strong>(JS/OOP/Design patterns)</strong>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
