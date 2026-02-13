import UserModal from "./UserModal";
import { FaPencilAlt } from "react-icons/fa";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "@/constants/roles";
import { toast } from "react-toastify";
import { updateUserRoles } from "@/api/users";
import { useState } from "react";

const UserActionButton = ({ id, roles }) => {
  const [show, setShow] = useState(false);
  const [userRoles, setUserRoles] = useState(roles);

  function setRoles(role) {
    setUserRoles((prev) =>
      prev.includes(role)
        ? prev.filter((item) => item != role)
        : [...prev, role],
    );
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="p-2 rounded-lg hover:bg-primary/20 text-primary cursor-pointer"
      >
        <FaPencilAlt />
      </button>

      <UserModal
        show={show}
        setShow={setShow}
        title={"Update user roles"}
        onConfirm={() => {
          updateUserRoles(id, userRoles.length == 0 ? [ROLE_USER] : userRoles)
            .then(() => {
              toast.success("Roles updated successfully.");

              setShow(false);
            })
            .catch((error) => {
              toast.error("Roles update failed.");
            });
        }}
      >
        <div className="flex items-center gap-3 pt-3 pb-8">
          {[ROLE_USER, ROLE_MERCHANT, ROLE_ADMIN].map((role) => (
            <label
              key={role}
              className="px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2 justify-center hover:bg-primary/10"
            >
              <input
                type="checkbox"
                defaultChecked={userRoles.includes(role)}
                disabled={role == ROLE_ADMIN}
                onChange={() => setRoles(role)}
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
      </UserModal>
    </>
  );
};

export default UserActionButton;
