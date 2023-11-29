import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex h-5 items-center justify-center space-x-4 text-sm text-center">
        <div>Contact us</div>
        <Separator orientation="vertical" />
        <div>FAQ</div>
        <Separator orientation="vertical" />
        <div>Reviews</div>
        <Separator orientation="vertical" />
        <div>Legal Stuff</div>
        <Separator orientation="vertical" />
        <div>Privacy Policies</div>
      </div>
    </div>
  );
};

export default Footer;
