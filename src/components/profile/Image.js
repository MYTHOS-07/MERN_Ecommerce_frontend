import Image from "next/image";
import React, { useEffect, useState } from "react";
import defaultUserPng from "@/assets/images/default-user-image.jpg";
import { setUser } from "@/redux/auth/authSlice";
import { toast } from "react-toastify";
import { updateProfileImage } from "@/api/users";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";

const ProfileImage = () => {
  const { user } = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localUrl, setLocalUrl] = useState(null);
  const dispatch = useDispatch();

  function updateImage() {
    if (!image) return;

    const formdata = new FormData();

    formdata.append("image", image);

    setLoading(true);

    updateProfileImage(user._id, formdata)
      .then((data) => {
        dispatch(setUser(data));
        toast.success("Image Updated successfully");
      })
      .catch(() => {
        toast.error("Image Updated failed");
      })
      .finally(() => {
        setImage(null);
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-4 pb-10 md:gap-8 lg:flex-row lg:items-start lg:gap-10">
      {user?.profileImageUrl || localUrl ? (
        <Image
          height={200}
          width={200}
          alt={user.name}
          src={localUrl || user?.profileImageUrl}
          className="h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-full bg-gray-100 border-4 border-gray-300 object-cover"
        />
      ) : (
        <Image
          height={200}
          width={200}
          alt={user.name}
          src={defaultUserPng}
          loading="eager"
          className="h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-full bg-gray-100 border-4 border-gray-300 object-cover"
        />
      )}

      <div className="w-full max-w-sm flex flex-col">
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-heading"
            htmlFor="file_input"
          >
            Upload file
          </label>

          <input
            id="file_input"
            type="file"
            className="w-full cursor-pointer bg-gray-100 p-2 border rounded-md text-sm focus:outline-none"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              const image = e.target.files[0];

              setImage(image);

              setLocalUrl(URL.createObjectURL(image));
            }}
          />

          <p className="mt-2 text-sm text-gray-500">
            PNG, JPG ,JPEG(MAX. 5mb).
          </p>
        </div>

        <button
          onClick={updateImage}
          type="submit"
          className="inline-flex gap-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary/20 dark:focus:ring-primary hover:bg-blue-800"
        >
          Update Image
          {loading && <Spinner className="h-6 w-6 fill-primary" />}
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;

