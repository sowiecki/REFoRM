const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var formSchema = new Schema({
  timestamp: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
    // unique: true // TODO make these values unique in seed data
  },
  editURL: {
    type: String,
    required: true
    // unique: true // TODO
  },
  projectName: {
    type: String,
    required: true
  },
  submitterName: {
    type: String,
    required: true
  },
  // Architecture and Implementation
  archAndImpRating: {
    type: Number
  },
  archAndImpComments: {
    type: String
  },
  // Dependency Management
  depManageRating: {
    type: Number
  },
  depManageComments: {
    type: String
  },
  // Internal Alignment
  intAlignRating: {
    type: Number
  },
  intAlignComments: {
    type: String
  },
  // Process
  processRating: {
    type: Number
  },
  processComments: {
    type: String
  },
  // Quality Assurance and Testing
  qaTestingRating: {
    type: Number
  },
  qaTestingComments: {
    type: String
  },
  // Stakeholder Alignment
  stakeAlignRating: {
    type: Number
  },
  stakeAlignComments: {
    type: String
  },
  // Staffing
  staffingRating: {
    type: Number
  },
  staffingComments: {
    type: String
  },
  // Team Morale
  teamMoraleRating: {
    type: Number
  },
  teamMoraleComments: {
    type: String
  }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
