import React from "react";
import { useForm } from "react-hook-form";
import {
  IoIosArrowRoundBack,
  IoIosPaperPlane,
  IoIosPeople,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import EmailListInput from "../../base/EmailListInput";
import IconButton from "../../base/IconButton";

const NewMember = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  return (
    <div className="flex justify-center items-center mt-24 mb-2">
      <div className="bg-white w-1/2 shadow-md rounded-lg">
        <div className="py-4 px-6 flex flex-col">
          <div className="flex justify-end">
            <IconButton
              icon={IoIosArrowRoundBack}
              onClick={() => navigate("/team")}
            />
          </div>
          <div className="flex flex-col border-solid">
            <div className="bg-blue-100 w-fit h-10 w-10 rounded-full flex justify-center items-center mb-2">
              <IoIosPeople
                className="text-blue-600 w-10 rounded-lg"
                size={20}
              />
            </div>
            <h6 className="font-bold text-md">Add Team Member</h6>
            <p className="text-xs mt-2 tracking-wide text-gray-600">
              Add users to your team. After being added to team they will be
              elihbile to be added on your boards.
            </p>
            <span className="mt-4 border-b-[0.5px] border-gray-500" />
            <form className="flex-col mt-6">
              <EmailListInput label="Users" setValue={() => console.log("a")} />
              <div className="flex justify-end mt-4">
                <IconButton
                  title="Add Users"
                  type="submit"
                  icon={() => <IoIosPaperPlane color="#2563eb" size={20} />}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMember;
