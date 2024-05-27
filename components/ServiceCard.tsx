import { IService } from "@/type";
import { FunctionComponent } from "react";

const ServiceCard: FunctionComponent<{
  service: IService;
}> = ({ service: { Icon, about, title } }) => {
  return (
    <div className="p-2 flex items-center space-x-4 ">
      <Icon className="w-12 h-12 text-greenn" />
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </div>
  );
};

export default ServiceCard;
