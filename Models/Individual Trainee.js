const individualTraineeSchema = new Schema({
  Username: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password:{
    type: String,
    required: true
  },
  First_Name:{
    type: String,
    required: true
  },
  Last_Name:{
    type: String,
    required: true
  },
  Gender:{
    type: String,
    required: true
  }
}, { timestamps: true });