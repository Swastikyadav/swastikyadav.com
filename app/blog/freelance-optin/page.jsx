export default function MasterClassOptin() {
  return (
    <div className="absolute w-full bg-[#1e1e1e]">
      <div className="bg-[#1e1e1e] font-bold mt-24 mb-20 px-6 text-center">
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto">
          <p className="text-[#e4c584] text-sm md:text-base">
            FREELANCING MASTERCLASS FOR DEVELOPERS
          </p>
          <h1 className="text-2xl text-white md:text-4xl">
            Watch, How I closed ₹8k Freelance web development client in 24
            hours.
          </h1>
          <p className="text-[#f1f0ea] text-xl md:text-2xl font-light">
            Step by step Freelancing guide for developers.
          </p>
        </div>
      </div>

      <form
        action="https://app.convertkit.com/forms/6998755/subscriptions"
        method="post"
        className="container max-w-4xl bg-[#a47843] mx-auto mb-20 py-20 px-6 md:px-24 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Enter First Name"
          className="p-3 mb-4 text-xl font-bold text-center bg-transparent border text-[#f1f0ea] outline-none w-full"
          required
        />
        <input
          type="email"
          name="email_address"
          id="email_address"
          placeholder="Enter Email"
          className="p-3 mb-4 text-xl font-bold text-center bg-transparent border text-[#f1f0ea] outline-none w-full"
          required
        />
        <button
          type="submit"
          className="bg-[#413561] p-3 text-xl font-bold text-center text-white outline-none w-full"
        >
          WATCH NOW
        </button>
      </form>
    </div>
  );
}
