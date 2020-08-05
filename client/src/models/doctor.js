export default class Doctor {
    constructor( email, password,fullName,gender,dateOfBirth,phoneNumber,speciality,yearsOfExperiance,educationBackground,address,CIN,image,marker) {
 
      this.email = email;
      this.password = password;
      this.fullName = fullName
      this.gender = gender
      this.dateOfBirth = dateOfBirth
      this.phoneNumber = phoneNumber
      this.speciality = speciality
      this.yearsOfExperiance = yearsOfExperiance
      this.educationBackground = educationBackground
      this.address = address
      this.CIN = CIN
      this.imageName = image
      this.marker = marker
    }
  }