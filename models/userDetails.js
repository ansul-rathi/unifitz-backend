// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose

const userDetailsSchema = new Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  occupation: {
    type: String,
    trim: true
  },
  // Health Information
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  medicalConditions: [{
    type: String,
    enum: [
      'High Blood Pressure',
      'Diabetes',
      'Asthma',
      'Thyroid Issues',
      'Joint Pain/Arthritis',
      'Back Problems',
      'Heart Conditions',
      'Respiratory Issues',
      'None'
    ]
  }],
  otherMedicalConditions: {
    type: String,
  },
  // Class Preferences
  preferredClasses: [{
    type: String,
    enum: ['Zumba', 'Yoga', 'Weight Training', 'Mix Batch']
  }],
  fitnessGoals: [{
    type: String,
    enum: [
      'Weight Loss',
      'Muscle Gain',
      'Flexibility',
      'Stress Relief',
      'General Fitness',
      'Better Posture',
      'Strength Training'
    ]
  }],
  experienceLevel: {
    type: String,
    enum: ['none', 'beginner', 'intermediate', 'advanced'],
    required: true
  },
  preferredTiming: {
    type: String
  },

  // Metadata
  isActive: {
    type: Boolean,
    default: true
  },
  images: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const UserDetails = mongoose.model("userDetails", userDetailsSchema);
export default UserDetails;