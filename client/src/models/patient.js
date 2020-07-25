export default class Patient {
  constructor(
    email,
    password,
    fullName,
    gender,
    dateOfBirth,
    CIN,
    phoneNumber,
    address,
    job,
    image
  ) {
    this.fullName = fullName;
    this.email = email;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.CIN = CIN;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.job = job;
    this.imageName = image;
  }
}
