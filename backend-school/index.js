// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ===============================
//    MongoDB Connection (LOCAL)
// ================================ */
// mongoose
//   .connect("mongodb://localhost:27017/you")
//   .then(() => {
//     console.log("MongoDB Connected ✅");
//   })
//   .catch((err) => {
//     console.log("MongoDB Error ❌", err);
//   });

// /* ===============================
//    Common Fields
// ================================ */
// const commonFields = {
//   Date: {
//     type: String,
//     default: () => new Date().toLocaleString(),
//   },
// };

// /* ===============================
//    Schema
// ================================ */
// const youSchema = new mongoose.Schema({
//   ...commonFields,
//   StudentName: {
//     type: String,
//     required: true,
//   },
//   ClassApplyingFor: {
//     type: String,
//     required: true,
//   },
//   ParentMobile: {
//     type: String,
//     required: true,
//   },
// });

// /* ===============================
//    Model
// ================================ */
// const You = mongoose.model("You", youSchema);

// /* ===============================
//    POST API (Save Data)
// ================================ */
// app.post("/data", async (req, res) => {
//   try {
//     const { StudentName, ClassApplyingFor, ParentMobile } = req.body;

//     const youdata = await You.create({
//       StudentName,
//       ClassApplyingFor,
//       ParentMobile,
//     });

//     res.status(201).json({
//       message: "Data added successfully ✅",
//       data: youdata,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Error ❌",
//       error: error.message,
//     });
//   }
// });

// /* ===============================
//    GET API (Fetch Data)
// ================================ */
// app.get("/get", async (req, res) => {
//   const data = await You.find();
//   res.json(data);
// });

// /* ===============================
//    Contact Schema
// ================================ */
// const contactSchema = new mongoose.Schema({
//   ...commonFields,
//   FirstName: {
//     type: String,
//     required: true,
//   },
//   LastName: {
//     type: String,
//     required: true,
//   },
//   Email: {
//     type: String,
//     required: true,
//   },
//   Phone: {
//     type: String,
//     required: true,
//   },
//   Message: {
//     type: String,
//     required: true,
//   },
// });

// /* ===============================
//    Contact Model
// ================================ */
// const Contact = mongoose.model("Contact", contactSchema);

// /* ===============================
//    Contact POST API
// ================================ */
// app.post("/contact", async (req, res) => {
//   try {
//     const { FirstName, LastName, Email, Phone, Message } = req.body;

//     const newContact = await Contact.create({
//       FirstName,
//       LastName,
//       Email,
//       Phone,
//       Message,
//     });

//     res.status(201).json({
//       message: "Message sent successfully ✅",
//       data: newContact,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Error sending message ❌",
//       error: error.message,
//     });
//   }
// });

// /* ===============================
//    Contact GET API
// ================================ */
// app.get("/contact/get", async (req, res) => {
//   const data = await Contact.find();
//   res.json(data);
// });

// /* ===============================
//    Online Admission Schema (Flexible)
// ================================ */
// const admissionSchema = new mongoose.Schema({
//   ...commonFields,
//   level: String,
//   student: {
//     firstName: String,
//     lastName: String,
//     dob: String,
//     gender: String,
//   },
//   classDetails: {
//     grade: String,
//     session: String,
//     stream: String,
//   },
//   previousSchool: {
//     schoolName: String,
//     board: String,
//     city: String,
//   },
//   academic: {
//     lastClass: String,
//     year: String,
//     percentage: String,
//   },
//   parents: {
//     fatherName: String,
//     fatherOcc: String,
//     motherName: String,
//     motherOcc: String,
//   },
//   contact: {
//     mobile: String,
//     alternate: String,
//     email: String,
//   },
//   address: {
//     line1: String,
//     city: String,
//     state: String,
//     zip: String,
//   },
//   transport: {
//     optIn: Boolean,
//   },
//   additional: {
//     cafeteria: Boolean,
//     dayCare: Boolean,
//   },
//   medical: {
//     bloodGroup: String,
//     allergies: String,
//   },
//   declaration: Boolean,
// });

// /* ===============================
//    Online Admission Model
// ================================ */
// const Admission = mongoose.model("Admission", admissionSchema);

// /* ===============================
//    Online Admission POST API
// ================================ */
// app.post("/admission", async (req, res) => {
//   try {
//     const data = await Admission.create(req.body);

//     res.status(201).json({
//       message: "Admission Application Submitted ✅",
//       data: data,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: "Error submitting application ❌",
//       error: error.message,
//     });
//   }
// });

// /* ===============================
//    Online Admission GET API
// ================================ */
// app.get("/admission/get", async (req, res) => {
//   const data = await Admission.find();
//   res.json(data);
// });

// /* ===============================
//    Server
// ================================ */
// app.listen(7000, () => {
//   console.log("Server running on port 7000 🚀");
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* ===============================
   Multer Setup (File Upload)
================================ */
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===============================
   MongoDB Connection
================================ */
mongoose
  .connect("mongodb://localhost:27017/you")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

/* ===============================
   YOU SCHEMA (Mini Admission)
================================ */
const youSchema = new mongoose.Schema(
  {
    StudentName: {
      type: String,
      required: true,
    },
    ClassApplyingFor: {
      type: String,
      required: true,
    },
    ParentMobile: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      default: () => new Date().toLocaleString(),
    },
  },
  {
    timestamps: true, // ✅ Date ON (createdAt, updatedAt)
  }
);

const You = mongoose.model("You", youSchema);

/* ===============================
   YOU API
================================ */
app.post("/data", async (req, res) => {
  try {
    const data = await You.create(req.body);
    res.status(201).json({
      message: "Data added successfully ✅",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error ❌",
      error: error.message,
    });
  }
});

app.get("/get", async (req, res) => {
  const data = await You.find();
  res.json(data);
});

/* ===============================
   CONTACT SCHEMA
================================ */
const contactSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      default: () => new Date().toLocaleString(),
    },
  },
  {
    timestamps: true, // ✅ Date ON
  }
);

const Contact = mongoose.model("Contact", contactSchema);

/* ===============================
   CONTACT API
================================ */
app.post("/contact", async (req, res) => {
  try {
    const data = await Contact.create(req.body);
    res.status(201).json({
      message: "Message sent successfully ✅",
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error ❌",
      error: error.message,
    });
  }
});

app.get("/contact/get", async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

/* ===============================
   ADMISSION SCHEMA (FULL FORM)
================================ */
const admissionSchema = new mongoose.Schema(
  {
    level: String,

    student: {
      firstName: String,
      lastName: String,
      dob: String,
      gender: String,
    },

    classDetails: {
      grade: String,
      session: String,
      stream: String,
    },

    previousSchool: {
      schoolName: String,
      board: String,
      city: String,
    },

    academic: {
      lastClass: String,
      year: String,
      percentage: String,
    },

    parents: {
      fatherName: String,
      fatherOcc: String,
      motherName: String,
      motherOcc: String,
    },

    contact: {
      mobile: String,
      alternate: String,
      email: String,
    },

    address: {
      line1: String,
      city: String,
      state: String,
      zip: String,
    },

    transport: {
      optIn: Boolean,
    },

    additional: {
      cafeteria: Boolean,
      dayCare: Boolean,
    },

    medical: {
      bloodGroup: String,
      allergies: String,
    },

    documents: {
      birthCertificate: String,
      studentPhoto: String,
      reportCard: String,
    },

    declaration: Boolean,

    Date: {
      type: String,
      default: () => new Date().toLocaleString(),
    },
  },
  {
    timestamps: true, // ✅ Date ON
  }
);

const Admission = mongoose.model("Admission", admissionSchema);

/* ===============================
   ADMISSION API
================================ */
app.post(
  "/admission",
  upload.fields([
    { name: "birthCertificate", maxCount: 1 },
    { name: "studentPhoto", maxCount: 1 },
    { name: "reportCard", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let admissionData = {};
      if (req.body.jsonData) {
        admissionData = JSON.parse(req.body.jsonData);
      } else {
        admissionData = req.body;
      }

      const documents = {};
      if (req.files) {
        if (req.files.birthCertificate)
          documents.birthCertificate = `/uploads/${req.files.birthCertificate[0].filename}`;
        if (req.files.studentPhoto)
          documents.studentPhoto = `/uploads/${req.files.studentPhoto[0].filename}`;
        if (req.files.reportCard)
          documents.reportCard = `/uploads/${req.files.reportCard[0].filename}`;
      }

      const finalData = {
        ...admissionData,
        documents,
      };

      const data = await Admission.create(finalData);
      res.status(201).json({
        message: "Admission Application Submitted ✅",
        data,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "Error ❌",
        error: error.message,
      });
    }
  }
);

app.get("/admission/get", async (req, res) => {
  const data = await Admission.find();
  res.json(data);
});

/* ===============================
   SERVER
================================ */
app.listen(7000, () => {
  console.log("Server running on port 7000 🚀");
});

