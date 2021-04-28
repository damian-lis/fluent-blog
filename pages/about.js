import Layout from 'containers/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <section className="relative py-16">
        <div className="max-w-4xl px-4 m-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl border border-gray-200 rounded-lg mt-10">
            <div className="px-6">
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
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Damian Lis
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-900"></i>
                  Wrocław
                </div>
                <div className="mb-2 text-gray-700 mt-7">
                  <i className="fas fa-briefcase mr-2 text-lg text-blue-900 "></i>
                  <p className="my-1.5">I am a Software Developer</p>
                  <p className="my-1.5">who creates web applications,</p>
                  <p className="my-1.5">services and many other web solutions</p>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      For about half a year, I have been developing as a frontend developer with
                      basic backend skills.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      I fell in love with programming because of the logic it uses, the ability to
                      create amazing projects and developing my problem-solving skills.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      On a daily basis I love creating React technology applications, mainly
                      e-commerce with lots of useful business options in the admin dashbord. Apart
                      from that, for the artist's soul, I also like to play around creating various
                      pseudo-intelligent games in JavaScript technology.
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
