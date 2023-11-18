import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

//schema blocked unrelated data
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First Name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name is required'] },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's Name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's Occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's Contact No. is required"],
  },
  motherName: { type: String, required: [true, "Mother's Name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's Occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's Contact No. is required"],
  },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, "Local Guardian's Name is required"] },
  occupation: {
    type: String,
    required: [true, "Local Guardian's Occupation is required"],
  },
  ContactNo: {
    type: String,
    required: [true, "Local Guardian's Contact No. is required"],
  },
  address: {
    type: String,
    required: [true, "Local Guardian's Address is required"],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student must have a unique Id'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The gender field can only be one of the following: 'male', 'female', 'other'",
    },
    required: true,
  },
  dateOfBirth: { type: String, required: [true, 'Date Of Birth is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  contactNo: { type: String, required: [true, 'Contact No. is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact No. is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'B+', 'O+', 'A-', 'B-', 'O-', 'AB+', 'AB-'],
      message:
        "The bloodGroup field can only be one of the following: 'A+', 'B+', 'O+', 'A-', 'B-', 'O-', 'AB+', 'AB-'",
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message:
        "The isActive field can only be one of the following: 'active', 'blocked'",
    },
    default: 'active',
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian's information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local Guardian's information is required"],
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
