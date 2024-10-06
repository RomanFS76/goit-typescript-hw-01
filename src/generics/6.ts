type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const newForm: Params = {
  email: "Cool@ua",
  firstName: "Jhon",
  lastName: "Doe",
  phone: "1122334455",
};

console.log(newForm);
