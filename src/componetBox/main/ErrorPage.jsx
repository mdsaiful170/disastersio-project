import { useNavigate } from "react-router-dom";
import {Container} from "../shearComponet/Containerbox";
import { Button } from "../usecompo/Button";


// ##########################
//   Error page
// ##########################
const ErrorPage = () => {
  const navigat = useNavigate();
  const pageHandel = () => {
    navigat("/");
  };
  return (
    <>
  
      <section className="pt-28">
        <Container>
          <div className="text-center mx-auto dark:text-darktextdipcolor text-textblackcolor w-[260px] space-y-5">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-textblackcolor dark:text-darktextdipcolor font-bold text-xl md:text-[26px] ">
              Page Not Found
            </h2>
            <p className="text-sm font-normal text-textsecondarycolor dark:text-darktextcolor">
              The page youre looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Button
              click={pageHandel}
              className={"dark:bg-darkgreencolor text-darktextdipcolor"}
            >
              Back to page
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ErrorPage;
