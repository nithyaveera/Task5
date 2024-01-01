const myresume={
    "name":"Nithya Veearamani",
    "age":"20",
    "contact": {
    "mobile": "9344502116",
    "email": "nithyaviramani2003@gmail.com",
    "address": "Sathyapuri,Kumarapalayam, Namakkal"
  },
  "education": {
    "UG graduation": {
      "course": "B.cm(ca)(Bachelor of Commerce with Computer Application)",
      "college": "JKK Nadaraja College of Arts and Science",
      "university": "Periyar University",
      "year of passing": 2023,
      "percentage": 70
    },
    "HSC": {
      "Board": "Tamil Nadu",
      "medium": "Tamil",
      "year of passing": 2020,
      "percentage": 85.16
    },
    "SSLC": {
      "Board": "Tamil Nadu",
      "medium": "Tamil",
      "year of passing": 2018,
      "percentage": 78.4
    }
  },
  "skills": ["HTML", "CSS", "Javascript"],
  "Languages Known": ["Tamil","English"],
  "personal details": {
    "father's name": "A. Veeramani",
    "date of birth": "03.09.2003",
    "gender": "Female",
    "marital status": "Unmarried",
    "nationality": "Indian"
  },
  "interests": ["Web development"],

}

for(let key in myresume){
    console.log(key,":",myresume[key])
}