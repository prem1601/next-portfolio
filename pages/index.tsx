import ServiceCard from "@/components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Bringing over 3 years of expertise in web UI development with in-depth
        knowledge of ReactJS, JavaScript and progressive web applications.
        Consistently recognized as a hands-on and competent leader, skilled at
        fast-paced, deadline-driven project completion.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow -mx-6">
        <h6 className="my-3 text-2xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-10 lg:grid-cols-2">
          {services.map((service, i) => (
            <div className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg" key={i}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
