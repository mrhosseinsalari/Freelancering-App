import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-md">
      <form className="space-y-8" onSubmit={handleSubmit}>
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
          <RadioInput
            label="کارفرما"
            name="role"
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            name="role"
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role === "FREELANCER"}
          />
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
