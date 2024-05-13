import SectionHeading from "./SectionHeading";

const QAndN = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          heading="Explore Your Curiosities"
          subHeading="Discover Insights, Tips, and Personalized Assistance"
        />
        <div className="mx-auto max-w-screen-md">
          <div className="join join-vertical w-full space-y-4 ">
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How do I sign up to voluntree with your organization?
              </div>
              <div className="collapse-content">
                <p>
                  Signing up to voluntree is easy! Just visit our website&apos;s
                  volunteer page and fill out the registration form. Once
                  submitted, our team will review your application and get in
                  touch with you regarding available opportunities.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What kind of volunteer opportunities do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a wide range of volunteer opportunities to suit
                  various interests and skills. Whether you&apos;re passionate
                  about environmental conservation, community outreach, or
                  education, we have something for everyone. Our opportunities
                  include event support, administrative tasks, mentorship
                  programs, and more.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Can I volunteer with my friends or family?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! Volunteering with friends or family can be a
                  rewarding experience. When signing up, you can indicate if
                  you&apos;d like to volunteer with specific individuals, and
                  we&apos;ll do our best to accommodate your request.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Do you provide training for volunteers?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we provide comprehensive training for all our volunteers.
                  Depending on the nature of the opportunity, training may
                  include orientation sessions, hands-on workshops, and online
                  resources. We want to ensure that all our volunteers feel
                  confident and prepared in their roles.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How much time commitment is required for volunteering?
              </div>
              <div className="collapse-content">
                <p>
                  The time commitment varies depending on the volunteer
                  opportunity. Some opportunities may require a few hours of
                  commitment per week, while others may be one-time events or
                  projects. We strive to offer flexibility to accommodate
                  different schedules and availability.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Can I volunteer remotely?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer remote volunteer opportunities for those who are
                  unable to volunteer on-site. These opportunities may include
                  virtual mentoring, online research, social media support, and
                  more. Remote volunteering allows individuals to contribute to
                  our cause from anywhere in the world.
                </p>
              </div>
            </div>
            <div className="collapse join-item collapse-arrow border border-primary p-2 text-black dark:border-white  dark:text-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How can I track my volunteer hours?
              </div>
              <div className="collapse-content">
                <p>
                  We provide a convenient online platform where volunteers can
                  log their hours. Once logged in, you can easily track your
                  volunteer hours, view past activities, and generate reports
                  for your records or for any required documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAndN;
