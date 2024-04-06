import { useState } from "react";
import TextField from "../../ui/TextField";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full max-w-md">
      <form className="space-y-8">
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center justify-center gap-x-8">
          <div className="flex items-center gap-x-2 text-secondary-600">
            <input
              className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
              type="radio"
              name="role"
              id="OWNER"
              value="OWNER"
            />
            <label htmlFor="OWNER">کارفرما</label>
          </div>
          <div className="flex items-center gap-x-2 text-secondary-600">
            <input
              className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
            />
            <label htmlFor="FREELANCER">فریلنسر</label>
          </div>
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
