const AhsokaVideos = () => {
  return (
      <>
          <section id="ahsoka-videos" className="relative h-[915px] w-[100%] border border-yellow-500">
              <figure className="absolute top-0 left-0 h-full w-full z-0">
                  {/* Make sure each image covers the entire section */}
                  <img
                      src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-tentpole-desktop_87875115.jpeg?region=0,0,1600,600"
                      alt=""
                      className="top-0 left-0 w-full h-auto object-cover"
                  />
                  <img
                      src="/public/ahsoka-tentpole-desktop-gumstick_840a96c4.jpeg"
                      alt=""
                      className="top-0 left-0 w-full h-auto object-cover"
                  />
                  <img
                      src="/public/ahsoka-tentpole-anchor-starmap_2cb18246.jpeg"
                      alt=""
                      className="top-0 left-0 w-full h-auto object-cover"
                  />
              </figure>

              <article className="relative z-10 h-full w-full border border-yellow-500">
                  <div id="ahsoka-header" className="flex h-auto items-center justify-end px-4 lg:px-0">
                      <div className="w-1/2 rounded-lg bg-opacity-90 p-8">
                          <div className="scale-[70%]">
                              <img
                                  src="https://lumiere-a.akamaihd.net/v1/images/107-ahsoka-logotitle-800_1ee3f65b.png?region=0,0,800,445"
                                  alt="Ahsoka Logo"
                                  id="ahsoka-logo"
                                  // className="border border-cyan-500"
                              />
                          </div>
                          <div className="text-xl lg:text-3xl">
                              Hera must answer to the New Republic, while far, far away, a reunion takes place.
                          </div>
                          <div className="mt-4">
                              <button className="rounded-3xl bg-[var(--secondary)] px-4 py-2 text-[.8rem] text-stone-600 md:px-6 md:py-3 lg:px-8 lg:py-4">
                                  STREAM NOW
                              </button>
                          </div>
                      </div>
                  </div>
              </article>
          </section>
      </>
  );
}

export default AhsokaVideos;
