export function LoginPass(login, pass) {
  usersData = {
    'admin': 'root',
    'user': '123'
  };

  if (!(login in usersData)) {
      return 'User Error';
  } else if (usersData[login] != pass) {
      return 'Password Error';
  } else if (login in usersData && usersData[login] == pass) {
      return 'Success';
  };
};





  








