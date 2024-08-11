const mongoose = require('mongoose');

const codeSubmission = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  questionId: { 
    type: String, 
    required: true 
  },
  language: { 
    type: String, 
    required: true 
  },
  code: { 
    type: String, 
    required: true 
  },
  output: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const CodeSubmission = mongoose.model('CodeSubmission', codeSubmission);

module.exports = CodeSubmission;
