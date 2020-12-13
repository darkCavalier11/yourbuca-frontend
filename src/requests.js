import instance from "axios";
const signup = async function (e) {
  e.preventDefault();
  const user = document.querySelector("form");
  const cred = {
    name: user.name.value,
    email: user.email.value,
    phone: user.phone.value,
    DOB: user.DOB.value,
    password: user.password.value,
  };
  let confPassword = user.confPassword.value;
  if (cred.password.length < 6) {
    alert("Try a better password");
    return 0;
  } else if (cred.password !== confPassword) {
    alert("please confirm the password again");
    return 0;
  } else {
    try {
      const data = await instance.post("https://yourbuca-backend.herokuapp.com/signup", cred);
      const user = data.data.user;
      localStorage.setItem("name", user.name);
      localStorage.setItem("phone", user.phone);
      localStorage.setItem("DOB", user.DOB);
      localStorage.setItem("email", user.email);
      localStorage.setItem("token", data.data.token);
    } catch (err) {}
  }
};

const login = async function (e) {
  e.preventDefault();
  const user = document.querySelector("form");
  const cred = {
    email: user.email.value,
    password: user.password.value,
  };
  try {
    const data = await instance.post("https://yourbuca-backend.herokuapp.com/login", cred);
    const user = data.data.user;
    localStorage.setItem("name", user.name);
    localStorage.setItem("phone", user.phone);
    localStorage.setItem("DOB", user.DOB);
    localStorage.setItem("email", user.email);
    localStorage.setItem("token", data.data.token);
    console.log(localStorage.getItem("token"));
  } catch (err) {}
};
export { login, signup };
