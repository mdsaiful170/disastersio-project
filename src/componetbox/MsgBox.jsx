import {cn} from "../../lib/utilites/cn"
import {Button} from "../usecompo/Button"
import { useState } from "react";
// ##########################
// message box component
// ##########################
export const MsgBox = ({ className }) => {
  // message box object state store meassage
  const [messageBox, setMessaGebox] = useState([
    {
      text: "Lorem ipsum dolar sit general sac mascho werho",
      type: "outgoing",
    },
    {
      text: "Lorem ipsum dolar sit general sac mascho werho",
      type: "incoming",
    },
    {
      text: "Lorem ipsum dolar sit general sac mascho werho",
      type: "incoming",
    },
    {
      text: "Lorem ipsum dolar sit general sac mascho werho",
      type: "outgoing",
    },
  ]);

  // input fild current value
  const [newMessage, setNewMessage] = useState("");

  //  separate new message and previous messages
  const sendMessageHandle = () => {
    if (newMessage.trim()) {
      setMessaGebox((prevmsg) => [
        ...prevmsg,
        { text: newMessage, type: "outgoing" },
      ]);
      setNewMessage("");
    }
  };

  // keyboard enter function
  const keyPressHandle = (e) => {
    if (e.key === "Enter") {
      sendMessageHandle();
    }
  };

  return (
    <>
      <div
        className={cn(
          " overflow-hidden md:max-w-sm   max-w-xs rounded-[10px] bg-[#F4F4F5] dark:bg-darkcofeecolor ",
          className
        )}
      >
        <div className="w-full px-[15px] py-[25px]  bg-bgcolored dark:bg-darkgreencolor">
          <h2 className="text-lg font-bold text-white">Chat with Cypher</h2>
        </div>
        <div className="p-4 py-4  space-y-4   ">
          <div className="max-h-[280px]  px-2 overflow-y-auto space-y-4">
            {/* messagebox data maping */}
            {messageBox.map((res, i) => (
              <div
                key={i}
                className={`flex items-center ${
                  res.type === "outgoing" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-[13px] py-[15px] max-w-[230px]  lg:max-w-[213px] text-[12px] rounded-[7px] ${
                    res.type === "outgoing"
                      ? "dark:border dark:border-darkgreencolor   bg-[#3F3F46] dark:bg-darkbgcolor/50 text-white "
                      : "bg-[#F4F4F5] dark:bg-darkgreencolor/60  text-textsecondarycolor dark:text-darktextdipcolor btn-border dark:border-darkgreencolor  "
                  } `}
                >
                  <p>{res.text}</p>
                </div>
              </div>
            ))}
          </div>

          <input
            type="text"
            // required
            value={newMessage}
            onKeyPress={keyPressHandle}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full px-[10px] py-[15px] text-textsecondarycolor dark:text-darktextdipcolor text-sm placeholder:text-[12px] placeholder:text-textsecondarycolor placeholder:dark:text-darktextcolor border-none outline-none btn-border dark:border-darkgreencolor bg-transparent rounded-[6px]"
            placeholder="Enter your question..."
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[7px] *:text-xl text-textsecondarycolor dark:text-darktextdipcolor">
              <i className="ri-camera-line"></i>
              <i className="ri-image-2-line"></i>
              <i className="ri-link"></i>
            </div>
            {/* button componet */}
            <Button
              click={sendMessageHandle}
              className={
                "rounded-full px-6 text-base tracking-widest font-normal py-[11px]"
              }
            >
              send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
